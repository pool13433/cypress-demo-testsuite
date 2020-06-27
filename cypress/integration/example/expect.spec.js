
const person = {
  name: 'Poolsawat',
  friends: [
    { name: 'Jane' },
    { name: 'Poom', age: 30 },
  ],
  cars: [
    'Nissan',
    'Toyota'
  ],
  getName: () => {
    return "Poolsawat"
  }
}

// https://github.com/chaijs/chai
describe('BDD Assertions Chaijs', () => {

  it('use expect expected json data', () => {
    expect(person.name).to.not.equal('Jane')
    expect(person.friends[0]).to.deep.equal({ name: 'Jane' })
    expect({ a: { b: ['x', 'y'] } }).to.have.nested.property('a.b[1]')
    expect({ a: { b: ['x', 'y'] } }).to.nested.include({ 'a.b[1]': 'y' })
    expect([1, 2]).to.have.ordered.members([1, 2]).but.not.have.ordered.members([2, 1])
    expect(person.friends[1]).to.have.any.keys('age')
    expect(person.friends[1]).to.have.all.keys('name', 'age')
    expect(person.name).to.be.a('string')

    expect([1, 2, 3]).to.include(2)

    expect(undefined).to.not.be.ok
    expect(true).to.be.true
    expect(false).to.be.false
    expect(null).to.be.null
    expect(undefined).to.be.undefined
    expect(person['name']).to.exist
    expect([]).to.be.empty
    expect(arguments).to.be.arguments

    expect(42).to.equal(42)

    expect({ name: 'Jane' }).to.deep.equal({ name: 'Jane' })
    expect({ name: 'Jane' }).to.eql({ name: 'Jane' })

    expect(10).to.be.greaterThan(5)

    expect(10).to.be.at.least(10)

    expect(5).to.be.lessThan(10)

    expect('test').to.have.length.of.at.most(4)

    expect(7).to.be.within(5, 10)
    expect([1, 2, 3]).to.be.instanceOf(Array)

    expect(person).to.have.property('name')
    expect(person).to.have.deep.property('friends')
    expect('test').to.have.ownProperty('length')

    expect({ a: 1 }).to.have.ownPropertyDescriptor('a')

    expect('test').to.have.lengthOf(4)
    expect('testing').to.match(/^test/)

    expect('testing').to.have.string('test')
    expect({ pass: 1, fail: 2 }).to.have.keys('pass', 'fail')
    const fn = () => {
      throw Error
    }
    //expect(fn).to.throw(Error)

    expect(person).to.respondTo('getName')

    //expect(person).itself.to.respondTo('name')
    expect(1).to.satisfy((num) => { return num > 0 })

    expect(1.5).to.be.closeTo(1, 0.5)

    expect([1, 2, 3]).to.include.members([3, 2])
    expect(2).to.be.oneOf([1, 2, 3])
    //expect(fn).to.change(obj, 'val')
    //expect(fn).to.increase(obj, 'val')
    //expect(fn).to.decrease(obj, 'val')

  })
})

describe('TDD Assertions', () => {
  it('use assert.* ', () => {
    assert.isOk('everything', 'everything is ok')
    assert.isNotOk(false, 'this will pass')
    assert.equal(3, 3, 'vals equal')
    assert.notEqual(3, 4, 'vals not equal')
    assert.strictEqual(true, true, 'bools strict eq')
    assert.notStrictEqual(5, '5', 'not strict eq')
    assert.deepEqual({ id: '1' }, { id: '1' })
    assert.notDeepEqual({ id: '1' }, { id: '2' })
    assert.isAbove(6, 1, '6 greater than 1')
    assert.isAtLeast(5, 2, '5 gt or eq to 2')
    assert.isBelow(3, 6, '3 strict lt 6')
    assert.isAtMost(4, 4, '4 lt or eq to 4')
    assert.isTrue(true, 'this val is true')
    assert.isNotTrue('tests are no fun', 'val not true')
    assert.isFalse(false, 'val is false')
    assert.isNotFalse('tests are fun', 'val not false')
    //assert.isNull(err, 'there was no error')
    assert.isNotNull('hello', 'is not null')
    assert.isNaN(NaN, 'NaN is NaN')
    assert.isNotNaN(5, '5 is not NaN')
    assert.exists(5, '5 is not null or undefined')
    assert.notExists(null, 'val is null or undefined')
    assert.isUndefined(undefined, 'val is undefined')
    assert.isDefined('hello', 'val has been defined')
    assert.isFunction(x => x * x, 'val is func')
    assert.isNotFunction(5, 'val not funct')
    assert.isObject({ num: 5 }, 'val is object')
    assert.isNotObject(3, 'val not object')
    assert.isArray(['unit', 'e2e'], 'val is array')
    assert.isNotArray('e2e', 'val not array')
    assert.isString('e2e', 'val is string')
    assert.isNotString(2, 'val not string')
    assert.isNumber(2, 'val is number')
    assert.isNotNumber('e2e', 'val not number')
    //assert.isFinite('e2e', 'val is finite')
    assert.isBoolean(true, 'val is bool')
    assert.isNotBoolean('true', 'val not bool')
    assert.typeOf('e2e', 'string', 'val is string')
    assert.notTypeOf('e2e', 'number', 'val not number')

  })
})


describe('Chai-jQuery', () => {
  it('expect DOM Element ', () => {
    cy.visit('/elements.html')
      .get('form.ui.form').should($el => {
        expect($el).to.have.attr('class', 'ui form')

        const $notDisabled = $el.find('#text')
        expect($notDisabled).to.have.prop('disabled', false)

        expect($el).to.have.css('background-color', 'rgb(255, 255, 200)')
        expect($el).to.have.data('random', '77547562649602259494')
        expect($el).to.have.class('ui')

        const $email = $el.find('[name="email"]')
        expect($email).to.have.id('email')

        const $html = $el.find('#i-love-test-html')
        expect($html).to.have.html('\n              <h1>I love testing</h1>\n            ')

        const $text = $el.find('#i-love-test-text')
        expect($text).to.have.text('\n              I love testing\n            ')
        expect($text).to.contain('I love testing')

        expect($email).to.have.value('cypress@gmail.com')

        expect($email).to.be.visible

        const $hidden = $el.find('[name="hidden"]')
        expect($hidden).to.be.hidden

        const $option0 = $el.find('#select option:eq(1)')
        expect($option0).not.to.be.selected

        const $mazda = $el.find('[name="mazda-checked"]')
        expect($mazda).not.to.be.checked

        const $focus = $el.find('#text')
        //expect($focus).not.to.be.focused
        //expect($focus).to.have.focus

        expect($focus).to.be.enabled

        const $disabled = $el.find('[name="text-disabled"]')
        expect($disabled).to.be.disabled

        //expect($focus).not.to.be.empty
        //expect($nonexistent).not.to.exist
        //expect($emptyEl).to.match(':empty')
        //expect($el).to.contain('text')
        //expect($el).to.have.descendants('div')
      })


  })
})

describe('Sinon-Chai', () => {
  it('use sinon expect spy&tub', () => {
    let stubFirst ,stubSecound ,stubThird,stubFour,stubFive;
    let countStubFiveClick = 0;
    cy.visit('/window.html',{
      onLoad(win){
        stubFirst = cy.stub(win,'mySpyCalledFirst',()=>{})
        stubSecound = cy.stub(win,'mySpyCalledSecound',()=>{})
        stubThird = cy.stub(win,'mySpyCalledThird',()=>{})
        stubFour = cy.stub(win,'mySpyCalledFour',()=>{
          return 'mySpyCalledFour click 999'
        })
        stubFive = cy.stub(win,'mySpyCalledFive',()=> countStubFiveClick+= 2)
      }
    })
    .get('#btnFirst').click()
    .get('#btnSecound').click()
    .get('#btnSecound').click()
    .get('#btnThird').click()
    .get('#btnThird').click()
    .get('#btnThird').click()
    .get('#btnFour').click()
    .get('#btnFive').click().get('#btnFive').click()
    //.wait(2000)
    .then(()=>{
      expect(stubFirst).to.be.called
      expect(stubFirst).to.have.callCount(1)
      expect(stubFirst).to.be.calledOnce
      expect(stubSecound).to.be.calledTwice
      expect(stubThird).to.be.calledThrice
      expect(stubFirst).to.be.calledBefore(stubSecound)
      expect(stubThird).to.be.calledAfter(stubSecound)
      expect(stubFour).to.have.returned('mySpyCalledFour click 999')
      expect(stubFive).to.have.returned(countStubFiveClick)
      expect(stubFirst).to.have.always.returned(undefined)
      /*expect(stubFirst).to.be.calledWithNew
      expect(stubFirst).to.always.be.calledWithNew
      expect(spy).to.be.calledOn(context)
      expect(spy).to.always.be.calledOn(context)
      expect(spy).to.be.calledWith(...args)
      expect(spy).to.always.be.calledWith(...args)
      expect(spy).to.be.calledWithExactly(...args)
      expect(spy).to.always.be.calledWithExactly(...args)
      expect(spy).to.be.calledWithMatch(...args)
      expect(spy).to.always.be.calledWithMatch(...args)
      
      expect(spy).to.have.thrown(errorObjOrErrorTypeStringOrNothing)
      expect(spy).to.have.always.thrown(errorObjOrErrorTypeStringOrNothing)*/
    })
    

  })
})


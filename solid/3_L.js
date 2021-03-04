// Liskov substitution principle

class Person {
}

class Member extends Person {
    access() {
        console.log('You have access')
    }
}

class Guest extends Person {
    constructor() {
        super()
        this.isGuest = true
    }
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {
    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You haven\'t access! Go away!')
    }
}


function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // here should be member



// ================

class Component {
    constructor() {
        this.isComponent = true
    }
}

class ComponentWithTemplate extends Component{
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
renderComponent(new HOC())


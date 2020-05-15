class UserForm{
  constructor(public parent: Element){}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input>
      </div>
    `;
  }

  render = (): void => {
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.parent.append(userForm.content);
  }
}

export { UserForm }
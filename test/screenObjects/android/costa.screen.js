class costaScreen {
  get generateNumber() {
    return $("android.widget.TextView");
  }

  get costaImage() {
    return $("android.widget.ImageView");
  }

  async textBox(i) {
    return $$("android.widget.EditText")[i];
  }

  get firstName() {
    return $$("android.widget.EditText")[0];
  }
  async registraion(fName) {
    //, email, password, dob, inviteCod) {
    await this.firstName.setValue(fName);
    /* await $$("android.widget.EditText")[1].setValue(lastName);
    await $$("android.widget.EditText")[2].setValue(email);
    await $$("android.widget.EditText")[3].setValue(password);
    await $$("android.widget.EditText")[4].setValue(dob);
    await $$("android.widget.EditText")[5].setValue(inviteCod);*/
  }
}
module.exports = new costaScreen();

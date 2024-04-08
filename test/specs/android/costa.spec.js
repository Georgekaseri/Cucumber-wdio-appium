//import costaPage from "../pages/costa.page.js";
var costaScreen = require("../../screenObjects/android/costa.screen");
describe("COSTA App", () => {
  it("Launch Costa app", async () => {
    await expect(costaScreen.generateNumber).toHaveText(`Let the free
times roll.`);
  });

  it("Verify the COSTA images", async () => {
    const isDisplayed = await costaScreen.costaImage.isDisplayed();
    await expect(isDisplayed).toBe(true);
  });

  it("User registraion", async () => {
    const registraionButton = await $(
      '//android.widget.Button[@resource-id="uk.co.club.costa.costa:id/welcomeRegisterButton"]'
    );
    registraionButton.click();
    const registraionForm = await $(
      '//android.widget.TextView[@resource-id="uk.co.club.costa.costa:id/toolbarTitle"]'
    );
    await expect(registraionForm).toHaveText("REGISTER");
  });

  it("Fill up the registraion form", async () => {
    const email =
      "gs" + Math.floor(Math.random() * (999 - 100) + 100) + "example.com";
    const firstName = await $$("android.widget.EditText")[0];
    const lastName = await $$("android.widget.EditText")[1];
    const email = await $$("android.widget.EditText")[2];
    const password = await $$("android.widget.EditText")[3];
    const dob = await $$("android.widget.EditText")[4];
    const inviteCod = await $$("android.widget.EditText")[5];
    await firstName.setValue("Ghazala");
    await lastName.setValue("Shahin");
    await email.setValue(email);
    await password.setValue("Chachu@56");
    await dob.setValue("19/09/1990");
    await inviteCod.setValue("8hu9");
    //const email =
    //"gs" + Math.floor(Math.random() * (999 - 100) + 100) + "example.com";
    //costaScreen.registraion("Ghazala");
    /* "Shahin",
      email,
      "abcd@123",
      "19/09/1990",
      "89hj"
    );*/
  });
  /*it("should demonstrate the scrollIntoView command", async () => {
    const elem = await $(
      '//android.widget.EditText[@resource-id="uk.co.club.costa.costa:id/inviteCodeEditText"]'
    );
    await elem.touchAction([
      { action: "longPress", x: 0, y: 1000 },
      { action: "moveTo", x: 0, y: 10 },
      "release",
    ]);
    elem.setValue(8);
  });
  it("Subscribe to Costa coffe club", async () => {
    await $(
      '//android.widget.Switch[@resource-id="uk.co.club.costa.costa:id/optin"]'
    ).click();
  });

  it("Click on Registration button", async () => {
    await $(
      '//android.widget.FrameLayout[@resource-id="uk.co.club.costa.costa:id/registrationButton"]'
    ).click();
  });*/
});

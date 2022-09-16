import { test } from "@playwright/test";
import { userProfile } from "../../consts/userProfile";
import { LoginPage } from "../pages/Login.page";
import {} from "../../"

test.describe("Signing in", () => {
    test("Sign In with valid credentials", async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.doLogin(userProfile.validUser);
        await Login.isLogin(userProfile.validUser);
    });
    test("Sign in with invalid login and password", async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.doLogin(userProfile.invalidUser);
        await Login.isLogin(userProfile.invalidUser);
    });
    test("Sign in with empty login", async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.doLogin(userProfile.emptyLoginUser);
        await Login.isLogin(userProfile.emptyLoginUser);
    });
    test("Sign in with empty password", async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.doLogin(userProfile.emptyPassUser);
        await Login.isLogin(userProfile.emptyPassUser);
    });
    test("Sign in with empty login and password", async ({ page }) => {
        const Login = new LoginPage(page);
        await Login.doLogin(userProfile.emptyUser);
        await Login.isLogin(userProfile.emptyUser);
    });
});

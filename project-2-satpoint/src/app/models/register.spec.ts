import { Register } from "./register";


describe('Register', () => {
  it('should create an instance', () => {
    expect(new Register(0, "", "", "", "", "")).toBeTruthy();
  });
});

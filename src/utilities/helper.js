export class Helper {
  static getRegistrationURL() {
    const baseURL = process.env.REACT_APP_BASE_SERVICE_URL || 'localhost:3000';
    const registrationURL = process.env.REACT_APP_SERVICE_REGISTRATION_URL || "/registration";
    return baseURL + registrationURL;
  }

  static getTokenURL() {
    return process.env.REACT_APP_OAUTH_TOKEN_URL || "";
  }

  static getOCPAPIMSubscriptionKey(){
    return process.env.REACT_APP_OCP_APIM_SUBSCRIPTION_KEY || "";
  }
}

export default Helper;
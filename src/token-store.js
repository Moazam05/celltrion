import moment from 'moment';
import { Helper } from './utilities/helper';

export default {
  async getToken(){
    let accessToken = JSON.parse(localStorage.getItem("access_token"));
    if(!accessToken){
      accessToken = await this.generateToken();
    }
    if(moment().diff(accessToken.expiredOn, 'seconds') > 0) accessToken = await this.generateToken();
    return accessToken.token;
  },

  async generateToken(){
    const newToken = await this.retriveTokenFromService();
    const accessToken = { token: newToken, expiredOn: moment().add(3600, 'seconds') };
    localStorage.setItem("access_token", JSON.stringify(accessToken));
    return accessToken;
  },

  async retriveTokenFromService(){
    const tokenURL = Helper.getTokenURL();
    const subscriptionKey = Helper.getOCPAPIMSubscriptionKey();
    const response = await fetch(tokenURL, { headers: { "Ocp-Apim-Subscription-Key": subscriptionKey } });
    if(!response.ok) { 
      const error = await response.text();
      throw new Error(error);
    }
    const data = await response.json();
    if(!data) throw new Error("The token response is invalid.");
    return data.accessToken;
  }
}
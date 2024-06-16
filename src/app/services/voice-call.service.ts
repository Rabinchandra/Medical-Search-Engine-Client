import { Injectable } from '@angular/core';
import { env } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class VoiceCallService {
  constructor() {}

  makeCall(customerContactNumber: string) {
    return fetch(`https://api.vapi.ai/call/phone`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer 29d31a02-fbd8-41d3-b7c9-6ebfda57676d',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: {
          // Replace with the phone number to call
          twilioPhoneNumber: env.twilioPhoneNumber,
          // Your Twilio account details (required for phone calls)
          twilioAccountSid: env.twilioAccountSid,
          twilioAuthToken: env.twilioAuthToken,
        },
        assistantId: env.assistantId,
        customer: {
          number: customerContactNumber,
        },
      }),
    });
  }
}

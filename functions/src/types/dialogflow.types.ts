export type RequestDialog = {
  responseId: string;
  session: string;
  queryResult: {
    queryText: string;
    parameters: {
      name: { name: string };
      email: string;
    };
    allRequiredParamsPresent: boolean;
    fulfillmentText: string;
    fulfillmentMessages: [
      {
        text: {
          text: [string];
        };
      }
    ];
    outputContexts: [
      {
        name: string;
        lifespanCount: number;
        parameters: {
          "param-name": "param-value";
        };
      }
    ];
    intent: {
      name: string;
      displayName: string;
    };
    intentDetectionConfidence: 1;
    // eslint-disable-next-line @typescript-eslint/ban-types
    diagnosticInfo: {};
    languageCode: "pt-BR";
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  originalDetectIntentRequest: {};
};

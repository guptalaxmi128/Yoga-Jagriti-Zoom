import React, { useEffect } from "react";
import { ZoomMtg } from "@zoomus/websdk";

const Meeting = ({ payload }) => {
  console.log(payload);

  const initializeZoomMeeting = async () => {
    try {
      //   const { ZoomMtg } = await import('@zoomus/websdk');

      ZoomMtg.setZoomJSLib("https://source.zoom.us/2.18.2/lib", "/av");
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();
      ZoomMtg.i18n.load("en-US");
      ZoomMtg.i18n.reload("en-US");

      ZoomMtg.generateSDKSignature({
        meetingNumber: payload.meetingNumber,
        role: payload.role,
        sdkKey: payload.sdkKey,
        sdkSecret: payload.sdkSecret,
        success: function (signature) {
          ZoomMtg.init({
            leaveUrl: payload.leaveUrl,
            success: function (data) {
              ZoomMtg.join({
                meetingNumber: payload.meetingNumber,
                signature: signature.result,
                sdkKey: payload.sdkKey,
                userName: payload.userName,
                userEmail: payload.userEmail,
                passWord: payload.passWord,
                tk: "",
                success: function () {
                  console.log("...joined");
                },
                error: function (joinError) {
                  console.error("Error joining meeting:", joinError);
                },
              });
            },
            error: function (initError) {
              console.error("Error initializing Zoom:", initError);
            },
          });
        },
        error: function (generateError) {
          console.error("Error generating SDK signature:", generateError);
        },
      });
    } catch (error) {
      console.error("Error during Zoom setup:", error);
    }
  };

  useEffect(() => {
    initializeZoomMeeting();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      <h1>Meeting will be here</h1>
    </>
  );
};

export default Meeting;

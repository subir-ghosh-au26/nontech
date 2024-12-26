import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom'
const Room = () => {
    const {roomId} = useParams();
    const meeting = async(element) =>{
        const appID = 2024379751;
        // const AppId = 2024379751;
        // const AppSign = "f01b47da1b2abd43a821d3b1c09375b57356fc793668b20eb8e3b9aec532e673";
        const serverSecret = "b1054c0dabcb1f097c5664659c5a6505";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            // AppId,
            // AppSign,
            roomId,
            Date.now().toString(), "nontech"
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                turnOnMicrophoneWhenJoining: true,
                turnOnCameraWhenJoining: true,
                showMyCameraToggleButton: true,
                showMyMicrophoneToggleButton: true,
                showAudioVideoSettingsButton: true,
                showScreenSharingButton: true,
                showTextChat: true,
                showUserList: true,
                container: element,
                maxUsers: 50,
                sharedLinks: [{
                    url: window.location.origin + window.location.pathname + '?roomID=' + roomId,
                }],
                videoResolutionList: [
                    ZegoUIKitPrebuilt.VideoResolution_360P,
                    ZegoUIKitPrebuilt.VideoResolution_180P,
                    ZegoUIKitPrebuilt.VideoResolution_480P,
                    ZegoUIKitPrebuilt.VideoResolution_720P,
                  ],
               videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P, 
               onUserAvatarSetter:(userList) => {
                userList.forEach(user => {
                    user.setUserAvatar("https://th.bing.com/th/id/R.ac0b0791ab539bf4f63a2aea564d53c9?rik=L9Tv4a%2fF0ZZMew&pid=ImgRaw&r=0")
                })
            },
                scenario:{
                    mode:ZegoUIKitPrebuilt.VideoConference,
                }
            })

    }
  return (
    <div className='room-page '>
        <div ref={meeting} className="h-screen">

        </div>

    </div>
  )
}

export default Room
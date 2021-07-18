export declare type Direction = 'up' | 'right' | 'down' | 'left';
export declare type DeviceType = {
    deviceId: string;
    label: string;
};
export declare type SelectedDeviceId = string | null;
export declare type DeviceTypeContext = {
    devices: DeviceType[];
    selectedDevice: SelectedDeviceId;
    selectDeviceError?: Error | null;
};
export declare type DeviceConfig = {
    /** Whether to include additional devices (such as "Color bars" for video, "440Hz" for audio) in the available devices list */
    additionalDevices?: boolean;
};
export declare type LocalAudioOutputContextType = {
    isAudioOn: boolean;
    toggleAudio: () => void;
};
export declare type LocalVideoContextType = {
    tileId: null | number;
    isVideoEnabled: boolean;
    toggleVideo: () => Promise<void>;
};
export declare type ContentShareControlContextType = {
    paused: boolean;
    toggleContentShare: (sourceId?: string) => Promise<void>;
    togglePauseContentShare: () => void;
};
export declare enum MeetingStatus {
    Loading = 0,
    Succeeded = 1,
    Failed = 2,
    Ended = 3,
    JoinedFromAnotherDevice = 4
}
export declare type RosterAttendeeType = {
    chimeAttendeeId: string;
    externalUserId?: string;
    name?: string;
};
export declare type RosterType = {
    [attendeeId: string]: RosterAttendeeType;
};
export declare enum DevicePermissionStatus {
    UNSET = "UNSET",
    IN_PROGRESS = "IN_PROGRESS",
    GRANTED = "GRANTED",
    DENIED = "DENIED"
}
export declare enum DeviceLabels {
    None = 0,
    Audio = 1,
    Video = 2,
    AudioAndVideo = 3
}
export declare type DeviceLabelTrigger = () => Promise<MediaStream>;

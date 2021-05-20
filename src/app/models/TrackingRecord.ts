import { Characteristic } from "./Characteristic";

export class TrackingRecord {
    description: String;
    extensionInfo: Characteristic[];
    id: String;
    systemId: String;
    time: Date;
    user: String;
}
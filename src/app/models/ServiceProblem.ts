import { Characteristic } from "./Characteristic";
import { EventRef } from "./EventRef";
import { ImpactPattern } from "./ImpactPattern";
import { Note } from "./Note";
import { Place } from "./Place";
import { RelatedEntityRef } from "./RelatedEntityRef";
import { RelatedParty } from "./RelatedParty";
import { ResourceAlarmRef } from "./ResourceAlarmRef";
import { ResourceRef } from "./ResourceRef";
import { ServiceProblemRef } from "./ServiceProblemRef";
import { ServiceRef } from "./ServiceRef";
import { SLAViolationRef } from "./SLAViolationRef";
import { TrackingRecord } from "./TrackingRecord";
import { TroubleTicketRef } from "./TroubleTicketRef";

export class ServiceProblem {
    affectedLocation?: Place[];
    affectedNumberOfServices?: Number;
    affectedResource?: ResourceRef[];
    affectedService?: ServiceRef[];
    associatedSLAViolation?: SLAViolationRef[];
    associatedTroubleTicket?: TroubleTicketRef[];
    category?: String;
    comment?: Note[];
    correlationId?: String;
    description?: String;
    extensionInfo?: Characteristic[];
    firstAlert?: RelatedEntityRef;
    href?: String;
    id?: string;
    impactImportanceFactor?: String;
    impactPatterns?: ImpactPattern;
    originatingSystem?: String;
    originatorParty?: RelatedParty;
    parentProblem?: ServiceProblemRef[];
    priority?: Number;
    problemEscalation?: String;
    reason?: String;
    relatedEvent?: EventRef[];
    relatedObject?: RelatedEntityRef[];
    relatedParty?: RelatedParty[];
    resolutionDate?: Date;
    responsibleParty?: RelatedParty;
    rootCauseResource?: ResourceRef[];
    rootCauseService?: ServiceRef[];
    status?: String;
    statusChangeDate?: Date;
    statusChangeReason?: String;
    timeChanged?: Date;
    timeRaised?: Date;
    trackingRecord?: TrackingRecord[];
    underlyingAlarm?: ResourceAlarmRef[];
    underlyingProblem?: ServiceProblemRef[];
    
}

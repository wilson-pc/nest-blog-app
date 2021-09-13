import { SesionCountAggregate } from "../outputs/SesionCountAggregate";
import { SesionMaxAggregate } from "../outputs/SesionMaxAggregate";
import { SesionMinAggregate } from "../outputs/SesionMinAggregate";
export declare class AggregateSesion {
    _count: SesionCountAggregate | null;
    _min: SesionMinAggregate | null;
    _max: SesionMaxAggregate | null;
}

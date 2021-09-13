import { SesionCountAggregate } from "../outputs/SesionCountAggregate";
import { SesionMaxAggregate } from "../outputs/SesionMaxAggregate";
import { SesionMinAggregate } from "../outputs/SesionMinAggregate";
export declare class SesionGroupBy {
    id: string;
    token: string;
    state: boolean;
    userId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SesionCountAggregate | null;
    _min: SesionMinAggregate | null;
    _max: SesionMaxAggregate | null;
}

import BaseResponse from 'models/BaseResponse';

export enum RewardType {
  SUCCESS_ORDER = 'SUCCESS_ORDER',
}

export interface RewardStrategyResponse extends BaseResponse {
  name: string;
  code: RewardType;
  formula: string;
  status: number;
}

export interface RewardStrategyRequest {
  formula: string | null;
  status: number | null;
}

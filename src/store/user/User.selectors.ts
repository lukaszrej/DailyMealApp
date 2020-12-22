import { AppState } from '..';

export const getUserName = (state: AppState) => state.user.name;
export const getUserHeight = (state: AppState) => state.user.height;
export const getUserWeight = (state: AppState) => state.user.weight;
export const getUserAge = (state: AppState) => state.user.age;
export const getUserGender = (state: AppState) => state.user.gender;
export const getActivityLevel = (state: AppState) => state.user.activityLevel;
export const getDailyNeed = (state: AppState) => state.user.dailyNeed;

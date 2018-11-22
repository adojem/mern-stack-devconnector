import { TEST_DISPATCH } from './types';

// Register User
export const registerUser = userData => ({
   type: TEST_DISPATCH,
   payload: userData,
});

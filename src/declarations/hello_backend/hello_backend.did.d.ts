import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addinCompletedListHello' : ActorMethod<[string], undefined>,
  'addinPendingListHello' : ActorMethod<[string], undefined>,
  'getCompletedtodoHello' : ActorMethod<[], Array<string>>,
  'getCurrentUserHello' : ActorMethod<[], string>,
  'getPendingtodoHello' : ActorMethod<[], Array<string>>,
  'isCorrectPasswordHello' : ActorMethod<[string, string], string>,
  'isUsernameTakenHello' : ActorMethod<[string], boolean>,
  'registerUserHello' : ActorMethod<[string, string], boolean>,
}

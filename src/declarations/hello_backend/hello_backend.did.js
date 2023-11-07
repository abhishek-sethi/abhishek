export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addinCompletedListHello' : IDL.Func([IDL.Text], [], []),
    'addinPendingListHello' : IDL.Func([IDL.Text], [], []),
    'getCompletedtodoHello' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getCurrentUserHello' : IDL.Func([], [IDL.Text], []),
    'getPendingtodoHello' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'isCorrectPasswordHello' : IDL.Func([IDL.Text, IDL.Text], [IDL.Text], []),
    'isUsernameTakenHello' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'registerUserHello' : IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };

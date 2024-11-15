import storage from 'redux-persist/lib/storage';

export const persistConfig = {
    key: 'forum',
    storage,
    blacklist: [
        'snackMessage'
    ]
}
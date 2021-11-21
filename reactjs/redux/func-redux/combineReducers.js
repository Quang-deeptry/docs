const combineReducers = combineReducers({ getUser: getUserReducer });

combineReducers => 'Là 1 func dùng để combine all reducer trong apllication thành 1 single index reducer (rootReducer)'
=> 'Mỗi 1 reducers đại diện cho 1 phần apllication state và mỗi reducer sẽ có các parameter khác nhau'


=> 'Nói chung nó làm cho cấu trúc file dễ duy trì hơn'
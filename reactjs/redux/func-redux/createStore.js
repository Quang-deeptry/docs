const createStore = createStore(reducers, [preloadedState], [enhancer]);

reducers => 'là func trả về state tiếp theo của current state và một action để handle'
preloadedState => 'là một initial state (state khởi tạo ban đầu)'
enhancer => 'giúp tăng cường store. Kiểu như là một middleware để nâng cao cho khả năng của thứ 3 (applyMiddleware của redux)'

createStore => 'là 1 store chứa toàn bộ state của apllication'
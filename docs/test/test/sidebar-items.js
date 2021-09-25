initSidebarItems({"enum":[["Concurrent","是否同时执行测试"],["RunIgnored","是否应该运行被忽略的测试"],["RunStrategy",""],["ShouldPanic","是否期望对 panic 进行测试"],["TestName",""],["TestResult",""],["TestType","根据 rust 书 约定的测试类型。"]],"fn":[["parse_opts","将命令行参数解析为测试选项。 如果请求了帮助，则返回 `None` (因为我们仅显示帮助消息并且不运行测试)，如果提供的参数不正确，则返回 `Some(Err(..))`，否则创建 `TestOpts` 对象并返回它。"]],"struct":[["Metric",""],["MetricMap",""],["Options","调用方定义的测试运行的选项 (而不是 CLI 参数)。 如果我们还想添加其他选项，只需将其添加到此结构体中即可。"],["TestDesc",""],["TestDescAndFn",""],["TestExecTime","单元测试的测量执行时间。"],["TestId",""],["TestOpts",""],["TestTimeOptions","具有用于计算测试执行时间的参数的结构体。"]]});
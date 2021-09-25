initSidebarItems({"constant":[["MAX","`char` 可以具有的最高有效代码点。"],["REPLACEMENT_CHARACTER","`U+FFFD REPLACEMENT CHARACTER` () 在 Unicode 中用于表示解码错误。"]],"fn":[["decode_utf16","在 `iter` 中的 UTF-16 编码的代码点上创建一个迭代器，将不成对的代理返回为 `Err`s。"],["from_digit","将给定基数中的数字转换为 `char`。"],["from_u32","将 `u32` 转换为 `char`。"],["from_u32_unchecked","将 `u32` 转换为 `char`，而忽略有效性。"]],"struct":[["CharTryFromError","从 u32 转换为 char 失败时返回的错误类型。"],["DecodeUtf16","一个迭代器，用于解码来自 u16 迭代器的 UTF-16 编码的代码点。"],["DecodeUtf16Error","解码 UTF-16 代码点时可以返回的错误。"],["EscapeDebug","产生 `char` 的字面量转义码的迭代器。"],["EscapeDefault","产生 `char` 的字面量转义码的迭代器。"],["EscapeUnicode","返回一个迭代器，该迭代器生成字符的十六进制 Unicode 转义符，如 `char`s。"],["ParseCharError","解析 char 时可以返回的错误。"],["ToLowercase","返回一个迭代器，该迭代器产生与 `char` 相等的小写字母。"],["ToUppercase","返回一个迭代器，该迭代器产生与 `char` 等效的大写字母。"]]});
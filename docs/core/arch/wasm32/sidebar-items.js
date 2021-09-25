initSidebarItems({"fn":[["f32x4","Materializes a SIMD value from the provided operands."],["f32x4_abs","Calculates the absolute value of each lane of a 128-bit vector interpreted as four 32-bit floating point numbers."],["f32x4_add","Adds pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_ceil","Lane-wise rounding to the nearest integral value not smaller than the input."],["f32x4_convert_i32x4","Converts a 128-bit vector interpreted as four 32-bit signed integers into a 128-bit vector of four 32-bit floating point numbers."],["f32x4_convert_u32x4","Converts a 128-bit vector interpreted as four 32-bit unsigned integers into a 128-bit vector of four 32-bit floating point numbers."],["f32x4_demote_f64x2_zero","Conversion of the two double-precision floating point lanes to two lower single-precision lanes of the result. The two higher lanes of the result are initialized to zero. If the conversion result is not representable as a single-precision floating point number, it is rounded to the nearest-even representable number."],["f32x4_div","Divides pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_eq","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_extract_lane","Extracts a lane from a 128-bit vector interpreted as 4 packed f32 numbers."],["f32x4_floor","Lane-wise rounding to the nearest integral value not greater than the input."],["f32x4_ge","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_gt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_le","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_lt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_max","Calculates the maximum of pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_min","Calculates the minimum of pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_mul","Multiplies pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_ne","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit floating point numbers."],["f32x4_nearest","Lane-wise rounding to the nearest integral value; if two values are equally near, rounds to the even one."],["f32x4_neg","Negates each lane of a 128-bit vector interpreted as four 32-bit floating point numbers."],["f32x4_pmax","Lane-wise maximum value, defined as `a < b ? b : a`"],["f32x4_pmin","Lane-wise minimum value, defined as `b < a ? b : a`"],["f32x4_replace_lane","Replaces a lane from a 128-bit vector interpreted as 4 packed f32 numbers."],["f32x4_splat","Creates a vector with identical lanes."],["f32x4_sqrt","Calculates the square root of each lane of a 128-bit vector interpreted as four 32-bit floating point numbers."],["f32x4_sub","Subtracts pairwise lanes of two 128-bit vectors interpreted as four 32-bit floating point numbers."],["f32x4_trunc","Lane-wise rounding to the nearest integral value with the magnitude not larger than the input."],["f64x2","Materializes a SIMD value from the provided operands."],["f64x2_abs","Calculates the absolute value of each lane of a 128-bit vector interpreted as two 64-bit floating point numbers."],["f64x2_add","Adds pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_ceil","Lane-wise rounding to the nearest integral value not smaller than the input."],["f64x2_convert_low_i32x4","Lane-wise conversion from integer to floating point."],["f64x2_convert_low_u32x4","Lane-wise conversion from integer to floating point."],["f64x2_div","Divides pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_eq","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_extract_lane","Extracts a lane from a 128-bit vector interpreted as 2 packed f64 numbers."],["f64x2_floor","Lane-wise rounding to the nearest integral value not greater than the input."],["f64x2_ge","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_gt","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_le","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_lt","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_max","Calculates the maximum of pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_min","Calculates the minimum of pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_mul","Multiplies pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_ne","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit floating point numbers."],["f64x2_nearest","Lane-wise rounding to the nearest integral value; if two values are equally near, rounds to the even one."],["f64x2_neg","Negates each lane of a 128-bit vector interpreted as two 64-bit floating point numbers."],["f64x2_pmax","Lane-wise maximum value, defined as `a < b ? b : a`"],["f64x2_pmin","Lane-wise minimum value, defined as `b < a ? b : a`"],["f64x2_promote_low_f32x4","Conversion of the two lower single-precision floating point lanes to the two double-precision lanes of the result."],["f64x2_replace_lane","Replaces a lane from a 128-bit vector interpreted as 2 packed f64 numbers."],["f64x2_splat","Creates a vector with identical lanes."],["f64x2_sqrt","Calculates the square root of each lane of a 128-bit vector interpreted as two 64-bit floating point numbers."],["f64x2_sub","Subtracts pairwise lanes of two 128-bit vectors interpreted as two 64-bit floating point numbers."],["f64x2_trunc","Lane-wise rounding to the nearest integral value with the magnitude not larger than the input."],["i16x8","Materializes a SIMD value from the provided operands."],["i16x8_abs","Lane-wise wrapping absolute value."],["i16x8_add","Adds two 128-bit vectors as if they were two packed eight 16-bit integers."],["i16x8_add_sat","Adds two 128-bit vectors as if they were two packed eight 16-bit signed integers, saturating on overflow to `i16::MAX`."],["i16x8_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["i16x8_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["i16x8_eq","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit integers."],["i16x8_extadd_pairwise_i8x16","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["i16x8_extadd_pairwise_u8x16","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["i16x8_extend_high_i8x16","Converts high half of the smaller lane vector to a larger lane vector, sign extended."],["i16x8_extend_high_u8x16","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["i16x8_extend_low_i8x16","Converts low half of the smaller lane vector to a larger lane vector, sign extended."],["i16x8_extend_low_u8x16","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["i16x8_extmul_high_i8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i16x8_extmul_high_u8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i16x8_extmul_low_i8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i16x8_extmul_low_u8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i16x8_extract_lane","Extracts a lane from a 128-bit vector interpreted as 8 packed i16 numbers."],["i16x8_ge","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit signed integers."],["i16x8_gt","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit signed integers."],["i16x8_le","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit signed integers."],["i16x8_load_extend_i8x8","Load eight 8-bit integers and sign extend each one to a 16-bit lane"],["i16x8_load_extend_u8x8","Load eight 8-bit integers and zero extend each one to a 16-bit lane"],["i16x8_lt","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit signed integers."],["i16x8_max","Compares lane-wise signed integers, and returns the maximum of each pair."],["i16x8_min","Compares lane-wise signed integers, and returns the minimum of each pair."],["i16x8_mul","Multiplies two 128-bit vectors as if they were two packed eight 16-bit signed integers."],["i16x8_narrow_i32x4","Converts two input vectors into a smaller lane vector by narrowing each lane."],["i16x8_ne","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit integers."],["i16x8_neg","Negates a 128-bit vectors intepreted as eight 16-bit signed integers"],["i16x8_q15mulr_sat","Lane-wise saturating rounding multiplication in Q15 format."],["i16x8_replace_lane","Replaces a lane from a 128-bit vector interpreted as 8 packed i16 numbers."],["i16x8_shl","Shifts each lane to the left by the specified number of bits."],["i16x8_shr","Shifts each lane to the right by the specified number of bits, sign extending."],["i16x8_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were eight 16-bit integers, only taking 8 indices to shuffle."],["i16x8_splat","Creates a vector with identical lanes."],["i16x8_sub","Subtracts two 128-bit vectors as if they were two packed eight 16-bit integers."],["i16x8_sub_sat","Subtracts two 128-bit vectors as if they were two packed eight 16-bit signed integers, saturating on overflow to `i16::MIN`."],["i32x4","Materializes a SIMD value from the provided operands."],["i32x4_abs","Lane-wise wrapping absolute value."],["i32x4_add","Adds two 128-bit vectors as if they were two packed four 32-bit integers."],["i32x4_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["i32x4_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["i32x4_dot_i16x8","Lane-wise multiply signed 16-bit integers in the two input vectors and add adjacent pairs of the full 32-bit results."],["i32x4_eq","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit integers."],["i32x4_extadd_pairwise_i16x8","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["i32x4_extadd_pairwise_u16x8","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["i32x4_extend_high_i16x8","Converts high half of the smaller lane vector to a larger lane vector, sign extended."],["i32x4_extend_high_u16x8","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["i32x4_extend_low_i16x8","Converts low half of the smaller lane vector to a larger lane vector, sign extended."],["i32x4_extend_low_u16x8","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["i32x4_extmul_high_i16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i32x4_extmul_high_u16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i32x4_extmul_low_i16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i32x4_extmul_low_u16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i32x4_extract_lane","Extracts a lane from a 128-bit vector interpreted as 4 packed i32 numbers."],["i32x4_ge","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit signed integers."],["i32x4_gt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit signed integers."],["i32x4_le","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit signed integers."],["i32x4_load_extend_i16x4","Load four 16-bit integers and sign extend each one to a 32-bit lane"],["i32x4_load_extend_u16x4","Load four 16-bit integers and zero extend each one to a 32-bit lane"],["i32x4_lt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit signed integers."],["i32x4_max","Compares lane-wise signed integers, and returns the maximum of each pair."],["i32x4_min","Compares lane-wise signed integers, and returns the minimum of each pair."],["i32x4_mul","Multiplies two 128-bit vectors as if they were two packed four 32-bit signed integers."],["i32x4_ne","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit integers."],["i32x4_neg","Negates a 128-bit vectors intepreted as four 32-bit signed integers"],["i32x4_replace_lane","Replaces a lane from a 128-bit vector interpreted as 4 packed i32 numbers."],["i32x4_shl","Shifts each lane to the left by the specified number of bits."],["i32x4_shr","Shifts each lane to the right by the specified number of bits, sign extending."],["i32x4_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were four 32-bit integers, only taking 4 indices to shuffle."],["i32x4_splat","Creates a vector with identical lanes."],["i32x4_sub","Subtracts two 128-bit vectors as if they were two packed four 32-bit integers."],["i32x4_trunc_sat_f32x4","Converts a 128-bit vector interpreted as four 32-bit floating point numbers into a 128-bit vector of four 32-bit signed integers."],["i32x4_trunc_sat_f64x2_zero","Saturating conversion of the two double-precision floating point lanes to two lower integer lanes using the IEEE `convertToIntegerTowardZero` function."],["i64x2","Materializes a SIMD value from the provided operands."],["i64x2_abs","Lane-wise wrapping absolute value."],["i64x2_add","Adds two 128-bit vectors as if they were two packed two 64-bit integers."],["i64x2_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["i64x2_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["i64x2_eq","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit integers."],["i64x2_extend_high_i32x4","Converts high half of the smaller lane vector to a larger lane vector, sign extended."],["i64x2_extend_high_u32x4","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["i64x2_extend_low_i32x4","Converts low half of the smaller lane vector to a larger lane vector, sign extended."],["i64x2_extend_low_u32x4","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["i64x2_extmul_high_i32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i64x2_extmul_high_u32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i64x2_extmul_low_i32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i64x2_extmul_low_u32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["i64x2_extract_lane","Extracts a lane from a 128-bit vector interpreted as 2 packed i64 numbers."],["i64x2_ge","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit signed integers."],["i64x2_gt","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit signed integers."],["i64x2_le","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit signed integers."],["i64x2_load_extend_i32x2","Load two 32-bit integers and sign extend each one to a 64-bit lane"],["i64x2_load_extend_u32x2","Load two 32-bit integers and zero extend each one to a 64-bit lane"],["i64x2_lt","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit signed integers."],["i64x2_mul","Multiplies two 128-bit vectors as if they were two packed two 64-bit integers."],["i64x2_ne","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit integers."],["i64x2_neg","Negates a 128-bit vectors intepreted as two 64-bit signed integers"],["i64x2_replace_lane","Replaces a lane from a 128-bit vector interpreted as 2 packed i64 numbers."],["i64x2_shl","Shifts each lane to the left by the specified number of bits."],["i64x2_shr","Shifts each lane to the right by the specified number of bits, sign extending."],["i64x2_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were two 64-bit integers, only taking 2 indices to shuffle."],["i64x2_splat","Creates a vector with identical lanes."],["i64x2_sub","Subtracts two 128-bit vectors as if they were two packed two 64-bit integers."],["i8x16","Materializes a SIMD value from the provided operands."],["i8x16_abs","Lane-wise wrapping absolute value."],["i8x16_add","Adds two 128-bit vectors as if they were two packed sixteen 8-bit integers."],["i8x16_add_sat","Adds two 128-bit vectors as if they were two packed sixteen 8-bit signed integers, saturating on overflow to `i8::MAX`."],["i8x16_all_true","Returns true if all lanes are nonzero or false if any lane is nonzero."],["i8x16_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["i8x16_eq","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit integers."],["i8x16_extract_lane","Extracts a lane from a 128-bit vector interpreted as 16 packed i8 numbers."],["i8x16_ge","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit signed integers."],["i8x16_gt","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit signed integers."],["i8x16_le","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit signed integers."],["i8x16_lt","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit signed integers."],["i8x16_max","Compares lane-wise signed integers, and returns the maximum of each pair."],["i8x16_min","Compares lane-wise signed integers, and returns the minimum of each pair."],["i8x16_narrow_i16x8","Converts two input vectors into a smaller lane vector by narrowing each lane."],["i8x16_ne","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit integers."],["i8x16_neg","Negates a 128-bit vectors intepreted as sixteen 8-bit signed integers"],["i8x16_popcnt","Count the number of bits set to one within each lane."],["i8x16_replace_lane","Replaces a lane from a 128-bit vector interpreted as 16 packed i8 numbers."],["i8x16_shl","Shifts each lane to the left by the specified number of bits."],["i8x16_shr","Shifts each lane to the right by the specified number of bits, sign extending."],["i8x16_shuffle","Returns a new vector with lanes selected from the lanes of the two input vectors `$a` and `$b` specified in the 16 immediate operands."],["i8x16_splat","Creates a vector with identical lanes."],["i8x16_sub","Subtracts two 128-bit vectors as if they were two packed sixteen 8-bit integers."],["i8x16_sub_sat","Subtracts two 128-bit vectors as if they were two packed sixteen 8-bit signed integers, saturating on overflow to `i8::MIN`."],["i8x16_swizzle","Returns a new vector with lanes selected from the lanes of the first input vector `a` specified in the second input vector `s`."],["memory_atomic_notify","Corresponding intrinsic to wasm’s `memory.atomic.notify` instruction"],["memory_atomic_wait32","Corresponding intrinsic to wasm’s `memory.atomic.wait32` instruction"],["memory_atomic_wait64","Corresponding intrinsic to wasm’s `memory.atomic.wait64` instruction"],["memory_grow","Corresponding intrinsic to wasm’s `memory.grow` instruction"],["memory_size","Corresponding intrinsic to wasm’s `memory.size` instruction"],["u16x8","Materializes a SIMD value from the provided operands."],["u16x8_add","Adds two 128-bit vectors as if they were two packed eight 16-bit integers."],["u16x8_add_sat","Adds two 128-bit vectors as if they were two packed eight 16-bit unsigned integers, saturating on overflow to `u16::MAX`."],["u16x8_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["u16x8_avgr","Lane-wise rounding average."],["u16x8_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["u16x8_eq","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit integers."],["u16x8_extadd_pairwise_u8x16","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["u16x8_extend_high_u8x16","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["u16x8_extend_low_u8x16","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["u16x8_extmul_high_u8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u16x8_extmul_low_u8x16","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u16x8_extract_lane","Extracts a lane from a 128-bit vector interpreted as 8 packed u16 numbers."],["u16x8_ge","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit unsigned integers."],["u16x8_gt","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit unsigned integers."],["u16x8_le","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit unsigned integers."],["u16x8_load_extend_u8x8","Load eight 8-bit integers and zero extend each one to a 16-bit lane"],["u16x8_lt","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit unsigned integers."],["u16x8_max","Compares lane-wise unsigned integers, and returns the maximum of each pair."],["u16x8_min","Compares lane-wise unsigned integers, and returns the minimum of each pair."],["u16x8_mul","Multiplies two 128-bit vectors as if they were two packed eight 16-bit signed integers."],["u16x8_narrow_i32x4","Converts two input vectors into a smaller lane vector by narrowing each lane."],["u16x8_ne","Compares two 128-bit vectors as if they were two vectors of 8 sixteen-bit integers."],["u16x8_replace_lane","Replaces a lane from a 128-bit vector interpreted as 8 packed u16 numbers."],["u16x8_shl","Shifts each lane to the left by the specified number of bits."],["u16x8_shr","Shifts each lane to the right by the specified number of bits, shifting in zeros."],["u16x8_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were eight 16-bit integers, only taking 8 indices to shuffle."],["u16x8_splat","Creates a vector with identical lanes."],["u16x8_sub","Subtracts two 128-bit vectors as if they were two packed eight 16-bit integers."],["u16x8_sub_sat","Subtracts two 128-bit vectors as if they were two packed eight 16-bit unsigned integers, saturating on overflow to 0."],["u32x4","Materializes a SIMD value from the provided operands."],["u32x4_add","Adds two 128-bit vectors as if they were two packed four 32-bit integers."],["u32x4_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["u32x4_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["u32x4_eq","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit integers."],["u32x4_extadd_pairwise_u16x8","Lane-wise integer extended pairwise addition producing extended results (twice wider results than the inputs)."],["u32x4_extend_high_u16x8","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["u32x4_extend_low_u16x8","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["u32x4_extmul_high_u16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u32x4_extmul_low_u16x8","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u32x4_extract_lane","Extracts a lane from a 128-bit vector interpreted as 4 packed u32 numbers."],["u32x4_ge","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit unsigned integers."],["u32x4_gt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit unsigned integers."],["u32x4_le","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit unsigned integers."],["u32x4_load_extend_u16x4","Load four 16-bit integers and zero extend each one to a 32-bit lane"],["u32x4_lt","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit unsigned integers."],["u32x4_max","Compares lane-wise unsigned integers, and returns the maximum of each pair."],["u32x4_min","Compares lane-wise unsigned integers, and returns the minimum of each pair."],["u32x4_mul","Multiplies two 128-bit vectors as if they were two packed four 32-bit signed integers."],["u32x4_ne","Compares two 128-bit vectors as if they were two vectors of 4 thirty-two-bit integers."],["u32x4_replace_lane","Replaces a lane from a 128-bit vector interpreted as 4 packed u32 numbers."],["u32x4_shl","Shifts each lane to the left by the specified number of bits."],["u32x4_shr","Shifts each lane to the right by the specified number of bits, shifting in zeros."],["u32x4_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were four 32-bit integers, only taking 4 indices to shuffle."],["u32x4_splat","Creates a vector with identical lanes."],["u32x4_sub","Subtracts two 128-bit vectors as if they were two packed four 32-bit integers."],["u32x4_trunc_sat_f32x4","Converts a 128-bit vector interpreted as four 32-bit floating point numbers into a 128-bit vector of four 32-bit unsigned integers."],["u32x4_trunc_sat_f64x2_zero","Saturating conversion of the two double-precision floating point lanes to two lower integer lanes using the IEEE `convertToIntegerTowardZero` function."],["u64x2","Materializes a SIMD value from the provided operands."],["u64x2_add","Adds two 128-bit vectors as if they were two packed two 64-bit integers."],["u64x2_all_true","Returns 1 if all lanes are nonzero or 0 if any lane is nonzero."],["u64x2_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["u64x2_eq","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit integers."],["u64x2_extend_high_u32x4","Converts high half of the smaller lane vector to a larger lane vector, zero extended."],["u64x2_extend_low_u32x4","Converts low half of the smaller lane vector to a larger lane vector, zero extended."],["u64x2_extmul_high_u32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u64x2_extmul_low_u32x4","Lane-wise integer extended multiplication producing twice wider result than the inputs."],["u64x2_extract_lane","Extracts a lane from a 128-bit vector interpreted as 2 packed u64 numbers."],["u64x2_load_extend_u32x2","Load two 32-bit integers and zero extend each one to a 64-bit lane"],["u64x2_mul","Multiplies two 128-bit vectors as if they were two packed two 64-bit integers."],["u64x2_ne","Compares two 128-bit vectors as if they were two vectors of 2 sixty-four-bit integers."],["u64x2_replace_lane","Replaces a lane from a 128-bit vector interpreted as 2 packed u64 numbers."],["u64x2_shl","Shifts each lane to the left by the specified number of bits."],["u64x2_shr","Shifts each lane to the right by the specified number of bits, shifting in zeros."],["u64x2_shuffle","Same as [`i8x16_shuffle`], except operates as if the inputs were two 64-bit integers, only taking 2 indices to shuffle."],["u64x2_splat","Creates a vector with identical lanes."],["u64x2_sub","Subtracts two 128-bit vectors as if they were two packed two 64-bit integers."],["u8x16","Materializes a SIMD value from the provided operands."],["u8x16_add","Adds two 128-bit vectors as if they were two packed sixteen 8-bit integers."],["u8x16_add_sat","Adds two 128-bit vectors as if they were two packed sixteen 8-bit unsigned integers, saturating on overflow to `u8::MAX`."],["u8x16_all_true","Returns true if all lanes are nonzero or false if any lane is nonzero."],["u8x16_avgr","Lane-wise rounding average."],["u8x16_bitmask","Extracts the high bit for each lane in `a` and produce a scalar mask with all bits concatenated."],["u8x16_eq","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit integers."],["u8x16_extract_lane","Extracts a lane from a 128-bit vector interpreted as 16 packed u8 numbers."],["u8x16_ge","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit unsigned integers."],["u8x16_gt","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit unsigned integers."],["u8x16_le","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit unsigned integers."],["u8x16_lt","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit unsigned integers."],["u8x16_max","Compares lane-wise unsigned integers, and returns the maximum of each pair."],["u8x16_min","Compares lane-wise unsigned integers, and returns the minimum of each pair."],["u8x16_narrow_i16x8","Converts two input vectors into a smaller lane vector by narrowing each lane."],["u8x16_ne","Compares two 128-bit vectors as if they were two vectors of 16 eight-bit integers."],["u8x16_popcnt","Count the number of bits set to one within each lane."],["u8x16_replace_lane","Replaces a lane from a 128-bit vector interpreted as 16 packed u8 numbers."],["u8x16_shl","Shifts each lane to the left by the specified number of bits."],["u8x16_shr","Shifts each lane to the right by the specified number of bits, shifting in zeros."],["u8x16_shuffle","Returns a new vector with lanes selected from the lanes of the two input vectors `$a` and `$b` specified in the 16 immediate operands."],["u8x16_splat","Creates a vector with identical lanes."],["u8x16_sub","Subtracts two 128-bit vectors as if they were two packed sixteen 8-bit integers."],["u8x16_sub_sat","Subtracts two 128-bit vectors as if they were two packed sixteen 8-bit unsigned integers, saturating on overflow to 0."],["u8x16_swizzle","Returns a new vector with lanes selected from the lanes of the first input vector `a` specified in the second input vector `s`."],["unreachable","Generates the trap instruction `UNREACHABLE`"],["v128_and","Performs a bitwise and of the two input 128-bit vectors, returning the resulting vector."],["v128_andnot","Bitwise AND of bits of `a` and the logical inverse of bits of `b`."],["v128_any_true","Returns `true` if any bit in `a` is set, or `false` otherwise."],["v128_bitselect","Use the bitmask in `c` to select bits from `v1` when 1 and `v2` when 0."],["v128_load","Loads a `v128` vector from the given heap address."],["v128_load16_lane","Loads a 16-bit value from `m` and sets lane `L` of `v` to that value."],["v128_load16_splat","Load a single element and splat to all lanes of a v128 vector."],["v128_load32_lane","Loads a 32-bit value from `m` and sets lane `L` of `v` to that value."],["v128_load32_splat","Load a single element and splat to all lanes of a v128 vector."],["v128_load32_zero","Load a 32-bit element into the low bits of the vector and sets all other bits to zero."],["v128_load64_lane","Loads a 64-bit value from `m` and sets lane `L` of `v` to that value."],["v128_load64_splat","Load a single element and splat to all lanes of a v128 vector."],["v128_load64_zero","Load a 64-bit element into the low bits of the vector and sets all other bits to zero."],["v128_load8_lane","Loads an 8-bit value from `m` and sets lane `L` of `v` to that value."],["v128_load8_splat","Load a single element and splat to all lanes of a v128 vector."],["v128_not","Flips each bit of the 128-bit input vector."],["v128_or","Performs a bitwise or of the two input 128-bit vectors, returning the resulting vector."],["v128_store","Stores a `v128` vector to the given heap address."],["v128_store16_lane","Stores the 16-bit value from lane `L` of `v` into `m`"],["v128_store32_lane","Stores the 32-bit value from lane `L` of `v` into `m`"],["v128_store64_lane","Stores the 64-bit value from lane `L` of `v` into `m`"],["v128_store8_lane","Stores the 8-bit value from lane `L` of `v` into `m`"],["v128_xor","Performs a bitwise xor of the two input 128-bit vectors, returning the resulting vector."]],"struct":[["v128","WASM-specific 128-bit wide SIMD vector type."]]});
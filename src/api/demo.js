// 两个有序数组
arr1 = [1, 2, 3]
arr2 = [1, 5, 6]

let result = []
function combine ( data1, data2 ) {
	result = data1
	data2.map( ( item, index ) => {
		result.map( ( resultItem, rindex ) => {
			if ( item <= resultItem ) {
			  result.splice(rindex, 1, item)
			}
		} )
	} )
}

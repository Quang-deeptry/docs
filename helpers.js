// lấy ngẫu nhiên 1 giá trị || đối tượng trong mảng 
const array = [1, 2, 3];
const random = array[Math.floor(Math.random() * array.length)];

// mongoose kiểm tra ID có phải thuộc loại object ID hay không 
isObjectId: (_id) => {
  try {
    if (ObjectId.isValid(_id)) {
      if ((String)(new ObjectId(_id) === _id)) {
        return true;
      }

      return false;
    }

    return false;
  } catch (error) {
    throw throwError(error.message);
  }
}

// dùng vòng lặp xử lý giảm số lần vòng lặp
const arrForLoop = [1, 2, 3, 4];
const arrAttr = 2;
// dùng return để giảm số lần vòng lặp
arrForLoop.forEach((item) => {
  if (item !== arrAttr) return;

  console.log(item)
})

// Lấy địa chỉ IP của người dùng từ Req.ip
getIPAddress: (ipAddress) => {
  let result = ipAddress;

  if (ipAddress.substr(0, 7) === '::ffff:') {
    result = ipAddress.substr(7);
  }

  return result;
}


// Trả về giá trị ngẫu nhiên giữa đầu và cuối số được chỉ định
randomIntFromInterval: (to, from) => Math.floor(Math.random() * (from - to + 1) + to)

// Sắp xếp dữ liệu dựa vào thuộc tính chỉ định
sortByField: (arr, field) => {
  if (!arr.length) return arr;

  return arr.sort((a, b) => b[field] - a[field]);
}

// làm tròn giá trị và lấy 2 giá trị sau dấu chấm
roundValue: (value) => {
  if (typeof value === 'object' || typeof value === 'string') return 0;

  return Math.round((value + Number.EPSILON) * 100) / 100;
}
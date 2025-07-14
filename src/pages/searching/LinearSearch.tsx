const LinearSearch: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Linear Search</h2>
      <pre>{`
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
`}</pre>
      <p>
        Tìm kiếm tuyến tính (Linear Search) là phương pháp duyệt qua từng phần tử của mảng để tìm giá trị cần tìm.
        Độ phức tạp là O(n), đơn giản nhưng không tối ưu với dữ liệu lớn.
      </p>
    </div>
  );
};

export default LinearSearch;

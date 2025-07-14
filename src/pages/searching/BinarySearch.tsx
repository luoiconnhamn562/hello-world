const BinarySearch: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Binary Search</h2>
      <pre>{`
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
`}</pre>
      <p>
        Tìm kiếm nhị phân yêu cầu mảng đã được sắp xếp. Bằng cách chia đôi dãy số liên tục, thuật toán có thời gian chạy O(log n), rất hiệu quả so với Linear Search.
      </p>
    </div>
  );
};

export default BinarySearch;

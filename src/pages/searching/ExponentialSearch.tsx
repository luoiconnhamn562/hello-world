const ExponentialSearch: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Exponential Search</h2>
      <pre>{`
def binary_search(arr, left, right, target):
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def exponential_search(arr, target):
    if arr[0] == target:
        return 0
    i = 1
    while i < len(arr) and arr[i] <= target:
        i *= 2
    return binary_search(arr, i // 2, min(i, len(arr)-1), target)
`}</pre>
      <p>
        Exponential Search kết hợp mở rộng phạm vi tìm kiếm theo lũy thừa và sau đó dùng Binary Search. Có độ phức tạp O(log i), hiệu quả với mảng lớn, chưa biết kích thước rõ ràng.
      </p>
    </div>
  );
};

export default ExponentialSearch;

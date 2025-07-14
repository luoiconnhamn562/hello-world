const InterpolationSearch: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Interpolation Search</h2>
      <pre>{`
def interpolation_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high and arr[low] <= target <= arr[high]:
        pos = low + ((target - arr[low]) * (high - low) //
                     (arr[high] - arr[low]))
        if arr[pos] == target:
            return pos
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1
    return -1
`}</pre>
      <p>
        Interpolation Search dựa trên nội suy vị trí phần tử cần tìm. Hoạt động tốt nhất khi các phần tử được phân phối đều. Trong trường hợp lý tưởng, độ phức tạp là O(log log n).
      </p>
    </div>
  );
};

export default InterpolationSearch;

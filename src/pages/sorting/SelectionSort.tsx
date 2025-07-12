const SelectionSort: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Selection Sort</h2>
      <pre>{`
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
`}</pre>
      <p>
        Selection Sort chọn phần tử nhỏ nhất trong đoạn chưa sắp xếp và đổi chỗ với phần tử đầu tiên của đoạn đó.
        Thuật toán có thời gian chạy O(n²) và không cần bộ nhớ phụ trợ.
      </p>
    </div>
  );
};

export default SelectionSort;

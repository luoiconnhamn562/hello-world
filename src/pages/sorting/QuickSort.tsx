const QuickSort: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Quick Sort</h2>
      <pre>{`
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x < pivot]
    right = [x for x in arr[1:] if x >= pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)
`}</pre>
      <p>
        Quick Sort là thuật toán chia để trị chọn một phần tử làm pivot, phân chia mảng thành hai phần
        và đệ quy sắp xếp chúng. Thời gian trung bình O(n log n), nhưng tệ nhất O(n²) nếu chọn pivot không tốt.
      </p>
    </div>
  );
};

export default QuickSort;

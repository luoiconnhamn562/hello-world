const BubbleSort: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Bubble Sort</h2>
      <pre>{`
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
`}</pre>
      <p>
        Bubble Sort là thuật toán sắp xếp đơn giản hoạt động bằng cách lặp lại dãy,
        so sánh từng cặp phần tử liền kề và hoán đổi nếu sai thứ tự.
      </p>
    </div>
  );
};

export default BubbleSort;

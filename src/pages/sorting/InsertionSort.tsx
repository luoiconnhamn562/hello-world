const InsertionSort: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Insertion Sort</h2>
      <pre>{`
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
`}</pre>
      <p>
        Insertion Sort hoạt động giống như cách xếp bài trên tay: mỗi phần tử được đưa vào đúng vị trí trong phần đã sắp xếp.
        Hiệu quả với danh sách nhỏ hoặc gần như đã được sắp xếp.
      </p>
    </div>
  );
};

export default InsertionSort;

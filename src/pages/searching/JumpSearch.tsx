const JumpSearch: React.FC = () => {
  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>Jump Search</h2>
      <pre>{`
import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n))
    prev = 0

    while arr[min(step, n)-1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1

    for i in range(prev, min(step, n)):
        if arr[i] == target:
            return i
    return -1
`}</pre>
      <p>
        Jump Search là sự kết hợp giữa Linear Search và Binary Search. Tìm kiếm theo bước nhảy √n rồi quay lại tìm tuyến tính. Độ phức tạp trung bình là O(√n).
      </p>
    </div>
  );
};

export default JumpSearch;

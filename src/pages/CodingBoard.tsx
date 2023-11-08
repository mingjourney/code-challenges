import { Card, Space } from 'antd'

export const CodingBoard = () => {
  const maxArea11 = (nums: Array<number>) => {
    let left = 0,
      right = nums.length - 1,
      maxWater = 0
    while (left < right) {
      maxWater =
        nums[left] < nums[right]
          ? Math.max((right - left) * nums[left++], maxWater)
          : Math.max((right - left) * nums[right--], maxWater)
    }
    return maxWater
  }
  const input11 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
  const input15 = [-1, 0, 1, 2, -1, -4]
  const threeSum = (nums: number[]) => {
    nums.sort((a, b) => a - b)
    const res = []
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) {
        continue
      }
      let L = 0,
        R = nums.length - 1
      while (L < R) {
        const sum = nums[i] + nums[L] + nums[R]
        if (sum === 0) {
          res.push([nums[i], nums[L], nums[R]])
          while (L < R && (nums[L] = nums[L + 1])) L++
          while (L < R && (nums[R] = nums[R - 1])) R--
          L++
          R++
        } else if (sum < 0) {
          L++
        } else {
          R--
        }
      }
    }
    console.log(res)
    return res
  }
  return (
    <div style={{ padding: '10px' }}>
      <h4>11.6</h4>

      <Space>
        <Card size="small" title="11-maxArea11" style={{ margin: '0px' }}>
          <div>{maxArea11(input11)}</div>
        </Card>
      </Space>
      <Space>
        <Card size="small" title="15-threeSum" style={{ margin: '0px' }}>
          <div>{threeSum(input15)}</div>
        </Card>
      </Space>
    </div>
  )
}

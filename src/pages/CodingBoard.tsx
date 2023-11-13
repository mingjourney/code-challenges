import { Card, Space } from 'antd'

export const CodingBoard = () => {
  //1.两数之和
  const input1 = [1, 2, 3, 4, 6, 2, 5, 1]
  const target1 = 5
  const twoSum = (nums: number[], target: number): number[] => {
    const m = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i]
      if (m.has(need)) {
        return [m.get(need)!, i]
      }
      m.set(nums[i], i)
    }
    return []
  }
  // 49.字母异位词分组
  const string15 = ['dew', 'wed', 'ewf']
  const groupAnagrams = (string: string[]): string[][] => {
    const m = new Map<string, string[]>()
    for (const c of string) {
      const strList = [...c]
      const sortedStr = strList.sort().join(',')
      if (m.has(sortedStr)) {
        m.get(sortedStr)!.push(c)
      } else {
        m.set(sortedStr, [c])
      }
    }
    return [...m.values()]
  }
  const input128 = [100, 4, 200, 1, 3, 2]
  // 128.最长连续序列
  const longestConsecutive = (nums: number[]): number => {
    const m = new Set<number>()
    for (const num of nums) {
      if (!m.has(num)) {
        m.add(num)
      }
    }
    let res = 0
    for (let c of m) {
      if (!m.has(c - 1)) {
        let cur = 1
        while (m.has(++c)) {
          cur++
        }
        res = Math.max(cur, res)
      }
    }
    return res
  }
  const input283 = [1, 2, 5, 2, 0, 2, 9, 0, 9, 5]
  const moveZeroes = (nums: number[]): number[] => {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]) {
        if (i !== j) {
          ;[nums[i], nums[j]] = [nums[j], nums[i]]
        }
        j++
      }
    }
    return nums
  }
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
    return res
  }
  return (
    <div style={{ padding: '10px' }}>
      <h4>11.6</h4>

      <Space>
        <Card size="small" title="1-twoSum" style={{ margin: '0px' }}>
          <div>{twoSum(input1, target1).toString()}</div>
        </Card>
      </Space>
      <Space>
        <Card size="small" title="15-groupAnagrams" style={{ margin: '0px' }}>
          <div>{groupAnagrams(string15).toString()}</div>
        </Card>
      </Space>
      <Space>
        <Card
          size="small"
          title="128-longestConsecutive"
          style={{ margin: '0px' }}
        >
          <div>{longestConsecutive(input128).toString()}</div>
        </Card>
      </Space>
      <Space>
        <Card size="small" title="283-moveZeroes" style={{ margin: '0px' }}>
          <div>{moveZeroes(input283).toString()}</div>
        </Card>
      </Space>
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

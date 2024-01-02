//1.两数之和
export const twoSum = (nums: number[], target: number): number[] => {
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
export const groupAnagrams = (string: string[]): string[][] => {
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

// 128.最长连续序列
export const longestConsecutive1 = (nums: number[]): number => {
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
// 283.移动零
export const moveZeroes = (nums: number[]): number[] => {
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
// 11.盛最多水的容器
export const maxArea = (nums: Array<number>) => {
  let L = 0,
    R = nums.length - 1
  let res = 0,
    cur = 0
  while (L < R) {
    if (nums[L] < nums[R]) {
      cur = nums[L] * (R - L)
      L++
    } else {
      cur = nums[R] * (R - L)
      R--
    }
    res = Math.max(cur, res)
  }
  return res
}

// 128. 最长连续序列
export const longestConsecutive2 = (nums: number[]): number => {
  const s = new Set<number>()
  for (const n of nums) {
    if (!s.has(n)) {
      s.add(n)
    }
  }
  let cur = 0,
    max = 0
  for (let c of s) {
    if (!s.has(c - 1)) {
      cur = 1
      while (s.has(++c)) {
        cur++
      }
    }
    max = Math.max(cur, max)
  }
  return max
}
//
export const twoSum2 = (nums: number[], target: number): number[] => {
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
// 49.字母异位词分组-2
export const groupAnagrams2 = (string: string[]): string[][] => {
  const m = new Map<string, string[]>()
  for (const s of string) {
    const sList = [...s]
    const sortedStr = sList.sort().join(',')
    if (m.has(sortedStr)) {
      m.get(sortedStr)!.push(s)
    } else {
      m.set(sortedStr, [s])
    }
  }
  return [...m.values()]
}

// 283.移动零-2
export const moveZeroes2 = (nums: number[]): number[] => {
  let cur = 0,
    i = 0
  for (i; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[cur++] = nums[i]
    }
  }
  for (cur; cur < nums.length; cur++) {
    nums[cur] = 0
  }
  return nums
}
// 283.移动零-3
export const moveZeroes3 = (nums: number[]): number[] => {
  let cur = 0,
    i = 0
  for (i; i < nums.length; i++) {
    if (nums[i]) {
      if (i != cur) {
        ;[nums[i], nums[cur]] = [nums[cur], nums[i]]
      }
      cur++
    }
  }
  return nums
}
// 11.盛最多水的容器
export const maxArea2 = (nums: Array<number>) => {
  let l = 0,
    r = nums.length - 1,
    max = 0,
    cur = 0
  while (l < r) {
    cur =
      nums[l] < nums[r]
        ? Math.min(nums[r], nums[l++]) * (r - l + 1)
        : Math.min(nums[r--], nums[l]) * (r - l + 1)
    max = Math.max(cur, max)
  }
  return max
}
// 15.三数之和
export const threeSum = (nums: number[]): number[][] => {
  const res = []
  nums.sort()
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum == 0) {
        res.push([nums[i], nums[l], nums[r]])
        if (l < r && nums[l] == nums[l + 1]) {
          l++
        }
        if (l < r && nums[r] == nums[r - 1]) {
          r--
        }
      }
      if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}
// 42.接雨水
export const trap = (height: number[]): number => {
  let l = 0,
    r = height.length - 1,
    max_l = 0,
    max_r = 0,
    res = 0
  while (l < r) {
    max_l = Math.max(height[l], max_l)
    max_r = Math.max(height[r], max_r)
    if (height[l] < height[r]) {
      res += max_l - height[l]
      l++
    } else {
      res += max_r - height[r]
      r--
    }
  }
  return res
}
// 3.无重复字符的最长子串
export const lengthOfLongestSubstring = (s: string): number => {
  const m = new Map()
  let start = 0,
    res = 0
  for (let i = 0; i < s.length; i++) {
    const pos = m.has(s[i]) ? m.get(s[i]) : -1
    if (pos >= start) {
      start = pos + 1
    }
    res = Math.max(i - start + 1, res)
    m.set(s[i], i)
  }
  return res
}
// 438. 找到字符串中所有字母异位词
export const findAnagrams = (s: string, p: string): number[] => {
  const sLen = s.length,
    pLen = p.length,
    res = []
  const pCount = new Array(26).fill(0)
  const sCount = new Array(26).fill(0)
  for (let i = 0; i < pLen; i++) {
    ++sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]
    ++pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]
  }
  if (sCount.toString() === pCount.toString()) {
    res.push(0)
  }
  for (let i = 0; i < sLen - pLen; i++) {
    --sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]
    ++sCount[s.charCodeAt(i + pLen) - 'a'.charCodeAt(0)]
    if (sCount.toString() === pCount.toString()) {
      res.push(i + 1)
    }
  }
  return res
}
// 560.和为 K 的子数组 （巧）
export const subarraySum = (nums: number[], k: number): number => {
  const m = new Map<number, number>()
  let count = 0
  m.set(0, 1)
  let sum = 0
  for (const num of nums) {
    sum += num
    if (m.has(sum - k)) {
      count += m.get(sum - k)!
    }
    if (m.has(sum)) {
      m.set(sum, m.get(sum)! + 1)
    } else {
      m.set(sum, 1)
    }
  }
  return count
}
// 239.滑动窗口最大值1.3 -> 1.7可刷
export const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const res: number[] = [],
    q: number[] = []
  for (let i = 0; i < k; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
  }
  res.push(nums[q[0]])
  for (let i = k; i < nums.length; i++) {
    while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
      q.pop()
    }
    q.push(i)
    if (q[0] <= i - k) {
      q.shift()
    }
    res.push(nums[q[0]])
  }
  return res
}

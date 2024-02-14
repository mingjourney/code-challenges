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

// 128. 最长连续序列 - 2
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
// 438. 找到字符串中所有字母异位词（不好）
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

// 560.和为 K 的子数组 2刷
export const subarraySum2 = (nums: number[], k: number): number => {
  const m = new Map<number, number>()
  let res = 0,
    sum = 0
  m.set(0, 1)
  for (const num of nums) {
    sum += num
    if (m.has(sum - k)) {
      res += m.get(sum - k)!
    }
    if (m.has(sum)) {
      m.set(sum, m.get(sum)! + 1)
    } else {
      m.set(sum, 1)
    }
  }
  return res
}

// 76. 最小覆盖子串 不会
export const minWindow = (s: string, t: string): string => {
  const map: { [key: string]: number } = {} // 用于存储目标字符串 t 中字符出现次数的映射
  let minStart = 0 // 最小覆盖子串的起始位置
  let minLen = Infinity // 最小覆盖子串的长度，默认为无穷大
  let count = t.length // 记录还需要匹配的字符数

  // 初始化字符映射
  for (const char of t) {
    map[char] = (map[char] || 0) + 1
  }

  let left = 0
  let right = 0

  // 右指针向右移动
  while (right < s.length) {
    if (map[s[right]] > 0) {
      count-- // 当 s[right] 在 t 中时，需要匹配的字符数减少
    }
    map[s[right]] = (map[s[right]] || 0) - 1 // 更新字符映射
    right++ // 右指针右移

    // 当所有字符都匹配时，移动左指针缩小窗口
    while (count === 0) {
      // 更新最小覆盖子串信息
      if (right - left < minLen) {
        minStart = left
        minLen = right - left
      }
      map[s[left]]++ // 左指针右移，恢复字符映射
      if (map[s[left]] > 0) {
        count++ // 当 s[left] 不再包含在窗口内时，需要匹配的字符数增加
      }
      left++ // 左指针右移
    }
  }

  // 返回最小覆盖子串
  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen)
}
// 53. 最大子数组和
export const maxSubArray = (nums: number[]): number => {
  const arr = []
  arr[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] > 0 ? arr[i - 1] + nums[i] : nums[i]
    max = Math.max(arr[i], max)
  }
  return max
}
// 56. 合并区间
export const merge = (intervals: number[][]): number[][] => {
  const res: Array<Array<number>> = []
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (let i = 0; i < intervals.length; i++) {
    if (res[res.length - 1][1] >= intervals[i][0] && res) {
      res[res.length - 1][1] = Math.max(intervals[i][1], res[res.length - 1][1])
    } else {
      res.push(intervals[i])
    }
  }
  return res
}

// 189. 轮转数组
export const rotate = (nums: number[], k: number): void => {
  const n = nums.length
  const newArr = new Array(n)
  for (let i = 0; i < nums.length; i++) {
    newArr[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i]
  }
}

// 189. 轮转数组 优化
const reverse = (nums: number[], start: number, end: number) => {
  while (start < end) {
    const temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp
    start++
    end--
  }
}
export const rotate1 = (nums: number[], k: number): void => {
  const endIndex = nums.length - 1
  k %= nums.length
  reverse(nums, 0, endIndex)
  reverse(nums, 0, k - 1)
  reverse(nums, k, endIndex)
}
// 238. 除自身以外数组的乘积
export const productExceptSelf = (nums: number[]): number[] => {
  const res = Array(nums.length).fill(1)
  let k = 1
  for (let i = 0; i < nums.length; i++) {
    res[i] *= k
    k *= nums[i]
  }
  k = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= k
    k *= nums[i]
  }
  console.log('res', res)
  return res
}
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// 160. 相交链表
export const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null => {
  const m = new Set()
  let p = headA
  while (p) {
    m.add(p)
    p = p.next
  }
  let q = headB
  while (q) {
    if (m.has(q)) {
      return q
    }
    q = q.next
  }
  return null
}
// 160. 相交链表-优化
export const getIntersectionNode1 = (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null => {
  let p = headA
  let q = headB
  while (p !== q) {
    p = p === null ? headB : p.next
    q = q === null ? headA : q.next
  }
  return p
}

// 239.滑动窗口最大值11.12
export const maxSlidingWindow2 = (nums: number[], k: number): number[] => {
  const res: number[] = []
  const q: number[] = []
  for (let i = 0; i < k; i++) {
    if (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
      q.pop()
    }
    q.push(i)
  }
  res.push(nums[q[0]])
  for (let i = k; i < nums.length; i++) {
    while (q.length >= 0 && nums[q[q.length - 1]]) {
      q.pop()
    }
    if (q[0] < i - k) {
      q.shift()
    }
    res.push(nums[q[0]])
  }
  return res
}
export const twoSum3 = (nums: number[], target: number): number[] => {
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
// 49.字母异位词分组 3
export const groupAnagrams3 = (string: string[]): string[][] => {
  const m = new Map<string, string[]>()
  for (const str of string) {
    const sortedStr = [...str].sort().join()
    if (m.has(sortedStr)) {
      m.get(sortedStr)!.push(str)
    } else {
      m.set(sortedStr, [str])
    }
  }
  return [...m.values()]
}
// 128.最长连续序列-3
export const longestConsecutive3 = (nums: number[]): number => {
  const s = new Set(nums)
  let maxLen = 0
  for (let c of s) {
    if (!s.has(c - 1)) {
      let cur = 1
      while (s.has(++c)) {
        cur++
      }
      maxLen = Math.max(maxLen, cur)
    }
  }
  return maxLen
}
// 283.移动零-4
export const moveZeroes4 = (nums: number[]): number[] => {
  let k = 0
  for (const num of nums) {
    if (num !== 0) {
      nums[k++] = num
    }
  }
  for (k; k < nums.length; k++) {
    nums[k] = 0
  }
  return nums
}

// 11.盛最多水的容器-3
export const maxArea3 = (nums: Array<number>): number => {
  let left = 0,
    right = nums.length - 1
  let max = 0
  while (left < right) {
    max =
      nums[left] < nums[right]
        ? Math.max(max, nums[left] * (right - left++))
        : Math.max(max, nums[right] * (right-- - left))
  }
  return max
}
// 15.三数之和-2 1.14 -> 1.18
export const threeSum2 = (nums: number[]): number[][] => {
  const res: number[][] = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
// 42.接雨水-2（不好）
export const trap2 = (height: number[]): number => {
  const maxRightList = new Array(height.length).fill(0)
  let maxRight = 0
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight = Math.max(maxRight, height[i + 1])
    maxRightList[i] = maxRight
  }
  console.log('maxRightList', maxRightList)
  let maxLeft = 0,
    res = 0
  for (let i = 1; i < height.length - 1; i++) {
    maxLeft = Math.max(maxLeft, height[i - 1])
    const minWall = Math.min(maxLeft, maxRightList[i])
    if (minWall > height[i]) res += minWall - height[i]
  }
  return res
}
// 42.接雨水-3
export const trap3 = (height: number[]): number => {
  let res = 0,
    maxLeft = 0,
    maxRight = 0,
    left = 0,
    right = height.length - 1
  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left])
    maxRight = Math.max(maxRight, height[right])
    if (maxLeft < maxRight) {
      res += maxLeft - height[left]
      left++
    } else {
      res += maxRight - height[right]
      right--
    }
  }

  return res
}
// 3.无重复字符的最长子串-2
export const lengthOfLongestSubstring2 = (s: string): number => {
  const m = new Set<string>()
  let left = 0,
    max = 0
  for (let right = 0; right < s.length; right++) {
    while (m.has(s[right])) {
      m.delete(s[left])
      left++
    }
    if (!m.has(s[right])) {
      m.add(s[right])
      max = Math.max(max, right - left + 1)
    }
  }
  return max
}
// 3.无重复字符的最长子串-3
export const lengthOfLongestSubstring3 = (s: string): number => {
  let maxStr = '',
    maxLen = 0
  for (const c of s) {
    const repeatIndex = maxStr.indexOf(c)
    if (repeatIndex < 0) {
      maxStr += c
    } else {
      maxLen = Math.max(maxLen, maxStr.length)
      maxStr = maxStr.slice(repeatIndex + 1) + c
    }
  }
  maxLen = Math.max(maxLen, maxStr.length)
  return maxLen
}
// 438. 找到字符串中所有字母异位词
export const findAnagrams2 = (s: string, p: string): number[] => {
  const m = new Array(26).fill(0)
  const res: number[] = []
  for (const c of p) {
    m[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }
  for (let l = 0, r = 0; r < s.length; r++) {
    m[s[r].charCodeAt(0) - 'a'.charCodeAt(0)]--
    while (m[s[r].charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
      m[s[l].charCodeAt(0) - 'a'.charCodeAt(0)]++
      l++
    }
    if (r - l + 1 === p.length) {
      res.push(l)
    }
  }
  return res
}
// 560.和为 K 的子数组-3
export const subarraySum3 = (nums: number[], k: number): number => {
  const m = new Map([[0, 1]])
  let res = 0,
    sum = 0
  for (const num of nums) {
    sum += num
    m.set(sum, (m.has(sum) ? m.get(sum)! : 0) + 1)
    res += m.has(sum - k) ? m.get(sum - k)! : 0
  }
  return res
}
// 53. 最大子数组和-2
export const maxSubArray2 = (nums: number[]): number => {
  let pre = 0,
    max = -Infinity
  for (const num of nums) {
    if (pre < 0) {
      pre = 0
    }
    pre = num + pre
    max = Math.max(pre, max)
  }
  return max
}
// 56. 合并区间-2
export const merge2 = (intervals: number[][]): number[][] => {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a[0] - b[0])
  let cur = intervals[0]
  const res: number[][] = []
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= cur[1]) {
      cur[1] = Math.max(cur[1], intervals[i][1])
    } else {
      res.push(intervals[i])
      cur = intervals[i]
    }
  }
  return res
}
// 189. 轮转数组
export const rotate2 = (nums: number[], k: number) => {
  const rk = k % nums.length
  const tmp = nums.slice(0, nums.length - rk)
  nums.splice(nums.length - rk)
  nums.unshift(...tmp)
}
const myReverse = (nums: number[], start: number, end: number) => {
  while (start < end) {
    const tmp = nums[start]
    nums[start] = nums[end]
    nums[end] = tmp
    start++
    end--
  }
}
export const rotate3 = (nums: number[], k: number) => {
  const rk = k % nums.length
  myReverse(nums, 0, nums.length - 1)
  myReverse(nums, 0, rk - 1)
  myReverse(nums, rk, nums.length - 1)
}
// 238. 除自身以外数组的乘积-2
export const productExceptSelf2 = (nums: number[]): number[] => {
  const len = nums.length
  const res = new Array(len)
  res[0] = nums[0]
  res[len] = nums[len]
  for (let i = 1; i < len; i++) {
    res[i] *= res[i - 1]
  }
  for (let j = nums.length - 2; j >= 0; j--) {
    res[j] *= res[j + 1]
  }
  return res
}
// 160. 相交链表-2 未运行
export const getIntersectionNode2 = (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null => {
  let p = headA
  let q = headB
  while (p !== q) {
    p = p === null ? headB : p.next
    q = q === null ? headA : q.next
  }
  return p
}
//206. 反转链表-2 未运行
export const reverseList = (head: ListNode | null): ListNode | null => {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
// 234. 回文链表
export const isPalindrome = (head: ListNode | null): boolean => {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const len = arr.length
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
}
// 141. 环形链表
export const hasCycle = (head: ListNode | null): boolean => {
  const m = new Set()
  if (!head) {
    return false
  }
  while (head) {
    if (m.has(head)) {
      return true
    } else {
      m.add(head)
      head = head.next
    }
  }
  return false
}
// 94. 二叉树的中序遍历
export const inorderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = []
  const inorder = (root: TreeNode | null) => {
    if (!root) {
      return
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
// 104. 二叉树的最大深度
export const maxDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// 226. 翻转二叉树
export const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null
  }
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
// 101. 对称二叉树
export const isSymmetric = (root: TreeNode | null): boolean => {
  const check = (p: TreeNode | null, q: TreeNode | null) => {
    if (!q && !p) {
      return true
    }
    if (!q || !p) {
      return false
    }
    if (p.val === q.val && check(p.left, q.right) && check(p.right, q.left)) {
      return true
    }
  }
  if (!root) {
    return false
  }
  return check(root.left, root.right)!
}
// 543. 二叉树的直径
export const diameterOfBinaryTree = (root: TreeNode | null) => {
  let maxRouteLength = 1
  const depth = (root: TreeNode | null): number => {
    if (!root) {
      return 0
    }
    const L = depth(root.left)
    const R = depth(root.right)
    maxRouteLength = Math.max(maxRouteLength, L + R + 1)
    return Math.max(L, R) + 1
  }
  depth(root)
  return maxRouteLength - 1
}
export const levelOrder = (root: TreeNode | null): number[][] => {
  const res: number[][] = []

  const levelPush = (node: TreeNode | null, depth: number) => {
    if (!node) return

    res[depth] = res[depth] || []
    res[depth].push(node.val)

    levelPush(node.left, depth + 1)
    levelPush(node.right, depth + 1)
  }

  levelPush(root, 0)
  return res
}
// 15.三数之和-3 1.27 -> 1.30
export const threeSum3 = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return res
}
// 70. 爬楼梯
export const climbStairs = (n: number): number => {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

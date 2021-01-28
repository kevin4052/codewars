# 

# -----------my solution-----------
def series_sum(n)
    if n == 0 then return '0.00' end
    sum = 0;
    i = 1;
    
    while i <= n do
      sum += 1.0 / (3 * (i - 1) + 1);
      i += 1;
    end
    
    sumArr = sum.round(2).to_s.split('.');
    
    if sumArr[1].length < 2 then
      sumArr[1] = sumArr[1] + '0'
    end
    
    return sumArr.join('.');
end

# --------best practice--------
def series_sum(n)
    return "0.00" if n == 0
    '%.2f' % (0..n-1).to_a.map { | x | (1.0/(x*3+1))}.reduce(:+)
end
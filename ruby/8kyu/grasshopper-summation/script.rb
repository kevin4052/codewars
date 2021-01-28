# https://www.codewars.com/kata/55d24f55d7dd296eb9000030/ruby
# ----------my solution----------
def summation(num)
    i = 0;
    sum = 0;
    
    while i <= num do
      sum += i;
      i += 1;
    end
    
    return sum;
end

# ----------best practice----------
def summation(num)
    (1..num).reduce(:+)
end
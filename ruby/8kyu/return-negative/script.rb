# Return Negative

# -------my solution-------
def makeNegative(num)
    if num > 0
      return num * -1
    else
      return num
    end
end

# -------best practice-------
def makeNegative(num)
    -num.abs
end
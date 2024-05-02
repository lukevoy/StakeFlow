const rateLimit = new Map();

function rateLimiter(options = {}) {
  const {
    windowMs = 60000, // 1 minute
    max = 100 // max requests per window
  } = options;

  return (req, res, next) => {
    const key = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    if (!rateLimit.has(key)) {
      rateLimit.set(key, {
        count: 1,
        resetTime: now + windowMs
      });
      return next();
    }

    const record = rateLimit.get(key);

    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + windowMs;
      return next();
    }

    if (record.count >= max) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: Math.ceil((record.resetTime - now) / 1000)
      });
    }

    record.count++;
    next();
  };
}

module.exports = rateLimiter;


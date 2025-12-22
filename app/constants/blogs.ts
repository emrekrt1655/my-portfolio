export interface Blog {
  slug: string;
  title: string;
  image: string;
  language: string;
  languageColor: string;
  category: string;
  excerpt: string;
  date: string;
  content?: string;
  categoryColor: string;
}

export const blogs: Blog[] = [
  {
  slug: "api-authentication-demystified",
  title: "API Authentication Demystified: Basic Auth, Bearer Tokens, and JWTs Explained",
  image: "/images/blogs/jwt-logo.png",
  language: "en",
  languageColor: "bg-blue-500 dark:bg-blue-400",
  category: "tech",
  categoryColor: "bg-purple-500 dark:bg-purple-400",
  excerpt: "Understanding the core mechanisms that power authentication in modern web applications. Learn when to use Basic Auth, Bearer Tokens, and JWTs.",
  date: "2025-01-15",
  content: `
    <h2>The Authentication Trilemma Every Developer Faces</h2>
    <p>You're building an API. Your frontend needs to authenticate users, and you're staring at three options: Basic Auth, bearer tokens, and JWTs. Pick the wrong one and you'll either overengineer your simple app or create a security nightmare in production.</p>

    <p>This is the first part of a comprehensive authentication series. Today, we're covering the foundation — the core mechanisms that power authentication in modern web applications. Let's dive deep into how each method works, when to use them, and the critical security mistakes that can cost you.</p>

    <h2>Understanding the Core Problem</h2>
    <p>Before we explore specific authentication methods, we need to establish exactly what problem we're solving.</p>

    <p>Authentication asks: "Who are you?" This is fundamentally different from authorization, which asks: "What can you do?" That's a separate topic we'll address later.</p>

    <p>Here's the core challenge that makes authentication necessary: <strong>HTTP is stateless.</strong></p>

    <p>Think of HTTP like a drive-thru window. You pull up, place your order, they hand you food, and the window closes. The next car pulls up, and the staff has no idea you just ordered. They don't remember you, and they don't try to. Clean slate every time.</p>

    <p>That's by design. Statelessness keeps things simple and fast. But it means you have to prove who you are every single time you pull up to the window.</p>

    <p>So how do we solve this? That's where authentication mechanisms come in.</p>

    <h2>The Three Fundamental Approaches</h2>
    <p>Today we're covering three core approaches:</p>
    <ul>
      <li><strong>Basic Auth</strong> — The simplest HTTP authentication scheme</li>
      <li><strong>Bearer Tokens</strong> — The most common transport mechanism</li>
      <li><strong>JWTs</strong> — Self-contained tokens changing how we build APIs</li>
    </ul>

    <p>In part two, we'll tackle OAuth 2.0, OpenID Connect, and single sign-on. But let's start with the fundamentals that everything else builds upon.</p>

    <h2>Basic Authentication: Simple But Dangerous</h2>
    <p>Basic authentication is the simplest HTTP authentication scheme, and understanding it is crucial because it illustrates the fundamental challenges of web security.</p>

    <h3>How Basic Auth Works</h3>
    <p>The mechanism is straightforward:</p>
    <ol>
      <li>Take your username and password</li>
      <li>Join them with a colon (username:password)</li>
      <li>Encode the result in Base64</li>
      <li>Send it in the Authorization header with every request</li>
    </ol>

    <p>Here's what that looks like:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=</code></pre>

    <h3>The Critical Misunderstanding About Base64</h3>
    <p>Now here's the part that catches developers off guard: <strong>Base64 is not encryption. It's encoding.</strong></p>

    <p>Think of Base64 like wrapping a gift. The wrapping paper makes it look different, but anyone can unwrap it in two seconds. There's no security here whatsoever.</p>

    <p>So why use Base64 at all? Because HTTP headers can only contain certain characters. Base64 converts your username:password string into safe characters for transmission. It's not for security—it's for compatibility.</p>

    <p>And yes, anyone can unwrap it. Try it yourself. Take that Base64 string above, paste it into any Base64 decoder, and you'll see the credentials in plain text.</p>

    <h3>The Security Implications</h3>
    <p>This means if you send Basic Auth over plain HTTP, you're broadcasting your password in unencrypted form across the network. You might as well post your password on Twitter.</p>

    <p>Basic Auth over HTTPS is fine. The TLS encryption protects the credentials during transmission. But over HTTP, it's completely exposed.</p>

    <p>There's another critical issue: you're sending credentials with every single request. That's a lot of opportunities for them to be intercepted or logged somewhere they shouldn't be.</p>

    <p>If your credentials end up in:</p>
    <ul>
      <li>Server logs</li>
      <li>Cache layers</li>
      <li>Proxy logs</li>
      <li>Load balancer logs</li>
    </ul>
    <p>That's a security incident waiting to happen.</p>

    <h3>When to Use Basic Auth</h3>
    <p>Despite its limitations, Basic Auth has legitimate use cases:</p>
    <ul>
      <li>Internal tools within your organization</li>
      <li>Local development environments</li>
      <li>Simple machine-to-machine communication where you control the network</li>
      <li>Quick prototypes and proof-of-concepts</li>
    </ul>

    <p>For anything else — especially public-facing APIs — let's look at better options.</p>

    <h2>Bearer Tokens: The Misunderstood Standard</h2>
    <p>Let's clear up a common misconception right away, because this confusion trips up developers constantly.</p>

    <h3>Bearer vs. Token: Understanding the Difference</h3>
    <p>Think of "bearer" like an envelope. The word "Bearer" on the front tells the post office how to deliver it: "Give this to whoever holds it."</p>

    <p>But the envelope itself doesn't tell you what's inside. Could be a letter, a check, or a gift card.</p>

    <p><strong>Bearer is the delivery method. The token is the content.</strong></p>

    <p>"Bearer" is just the transport mechanism defined in the HTTP authorization scheme. The token that comes after "bearer" can be any format — a random string, a JWT, or any other token type.</p>

    <h3>How Bearer Tokens Typically Work</h3>
    <p>Here's the standard flow with opaque tokens (random strings stored server-side):</p>

    <h4>Step 1: Getting a Token</h4>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>Client → Server: POST /login
{
  "username": "user@example.com",
  "password": "secretpassword"
}

Server → Client: 200 OK
{
  "token": "a1b2c3d4e5f6g7h8i9j0"
}</code></pre>

    <p>The server:</p>
    <ul>
      <li>Validates the credentials</li>
      <li>Generates a random token</li>
      <li>Stores it in the database with user information</li>
      <li>Sends it back to the client</li>
    </ul>

    <p>You get your badge at the door.</p>

    <h4>Step 2: Using the Token</h4>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>Client → Server: GET /api/profile
Authorization: Bearer a1b2c3d4e5f6g7h8i9j0</code></pre>

    <p>Now, every time you come back, you show your badge using the bearer authorization scheme. The server checks the registry (the database) every single time. You're either in, or you're not.</p>

    <h3>The Opaque Token Pattern</h3>
    <p>This is called an opaque token because the token itself contains no information. It's just a random identifier, like a coat check ticket.</p>

    <p>The server must query the database on every single request to:</p>
    <ul>
      <li>Figure out who this token belongs to</li>
      <li>Check if it's still valid</li>
      <li>Retrieve associated user information</li>
    </ul>

    <h3>Advantages Over Basic Auth</h3>
    <p>The improvements are significant:</p>
    <ul>
      <li><strong>You're not sending passwords repeatedly</strong> — The password is sent once during login, then never again</li>
      <li><strong>Token revocation</strong> — You can invalidate tokens without changing passwords</li>
      <li><strong>Expiration times</strong> — Tokens can automatically expire after a set period</li>
      <li><strong>Different scopes</strong> — You can issue tokens with different permissions</li>
    </ul>

    <h3>The Trade-Off: Database Lookups</h3>
    <p>But there's a cost: a database lookup on every single request.</p>

    <p>In high-traffic applications, that's a real performance consideration. If you're handling thousands of requests per second, those database queries add up.</p>

    <p>And if you're running multiple API servers for redundancy and scale, they all need access to the same token storage. That means you need:</p>
    <ul>
      <li>Redis or another in-memory data store</li>
      <li>A shared database</li>
      <li>Some other centralized session store</li>
    </ul>

    <p>This works and is widely used in production, but it adds infrastructure complexity.</p>

    <p>So the question becomes: What if the token itself could tell us who the user is without hitting the database?</p>

    <p>That's where JWTs revolutionize the picture.</p>

    <h2>JSON Web Tokens (JWTs): Self-Contained Authentication</h2>
    <p>This is where things get genuinely interesting. A JWT is a self-contained token that includes data right inside it. Let me decode this for you — literally.</p>

    <h3>Anatomy of a JWT</h3>
    <p>A JWT has three parts separated by dots:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; word-wrap: break-word;"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</code></pre>

    <h4>Part 1: The Header</h4>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>{
  "alg": "HS256",
  "typ": "JWT"
}</code></pre>

    <p>The header tells us:</p>
    <ul>
      <li>The algorithm used to sign the token (HMAC-SHA256)</li>
      <li>That this is a JWT</li>
    </ul>
    <p>This matters because the algorithm determines how we verify the signature.</p>

    <h4>Part 2: The Payload</h4>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>{
  "sub": "1234567890",
  "name": "John Doe",
  "role": "admin",
  "iat": 1516239022,
  "exp": 1516242622
}</code></pre>

    <p>This contains your claims — pieces of information about the user:</p>
    <ul>
      <li><strong>sub</strong> (subject) — User ID</li>
      <li><strong>name</strong> — User's name</li>
      <li><strong>role</strong> — User's role</li>
      <li><strong>iat</strong> (issued at) — When the token was created</li>
      <li><strong>exp</strong> (expiration) — When the token expires</li>
    </ul>

    <p>There are standard registered claims, and you can add your own custom claims for anything you need.</p>

    <h4>Part 3: The Signature</h4>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)</code></pre>

    <p>The server takes the header and payload, combines them, and creates a cryptographic hash using a secret key. This hash becomes the signature.</p>

    <h3>The Critical Security Detail Everyone Gets Wrong</h3>
    <p>Here's what catches people off-guard: <strong>The payload is only Base64 encoded, not encrypted.</strong></p>

    <p>Anyone — literally anyone — can decode and read a JWT payload. Go to jwt.io right now, paste any JWT, and you'll see everything inside.</p>

    <p>This is why you never put sensitive data in a JWT:</p>
    
    <p>❌ Passwords<br>
    ❌ Social security numbers<br>
    ❌ Credit card numbers<br>
    ❌ Private personal information</p>

    <p>Only put data you're okay with the client seeing:</p>
    
    <p>✅ User ID<br>
    ✅ Username<br>
    ✅ Roles<br>
    ✅ Non-sensitive metadata</p>

    <h3>What Makes JWTs Secure</h3>
    <p>Now here's the third part that does make JWTs secure: the signature.</p>

    <p>If anyone changes even a single character in the payload, the signature won't match and the server will reject it. This means the JWT is tamper-proof.</p>

    <p>You can't change the claims without invalidating the signature.</p>

    <p>But remember: <strong>tamper-proof doesn't mean private.</strong></p>

    <p>The signature prevents unauthorized changes, but anyone can still read the payload. That's the key distinction developers must understand.</p>

    <h3>The Game-Changing Advantage</h3>
    <p>Here's why JWTs transformed modern API architecture:</p>

    <p><strong>The server doesn't need to look up the database on every request.</strong></p>

    <p>The server just verifies the signature mathematically. No database hit. No Redis lookup. No session store query.</p>

    <p>JWT verification is typically 5–10 times faster than database lookups, and it means your server can scale horizontally without needing shared session storage. Each server can verify JWTs independently.</p>

    <p>This is massive for microservices architectures and distributed systems.</p>

    <h3>The Revocation Problem</h3>
    <p>But there's a significant trade-off.</p>

    <p>Remember how we could instantly revoke opaque tokens by deleting them from the database? With JWTs, revocation requires additional infrastructure.</p>

    <p>JWTs are stateless — the server doesn't track them. Once issued, they're valid until they expire.</p>

    <p>To revoke a JWT before expiration, you need to implement solutions like:</p>
    <ul>
      <li><strong>Token blacklist</strong> — Store revoked tokens in a database (defeats the stateless advantage)</li>
      <li><strong>Short-lived access tokens</strong> — Pair with refresh token rotation</li>
      <li><strong>Token versioning</strong> — Include a version number and check it against user state</li>
    </ul>

    <p>This is why JWT expiration times are critical. They limit the window of exposure if a token is compromised.</p>

    <h3>The Refresh Token Pattern</h3>
    <p>Most production applications use this pattern:</p>
    <ul>
      <li><strong>Short-lived access tokens</strong> (15 minutes) for API requests</li>
      <li><strong>Longer-lived refresh tokens</strong> (7–30 days) stored server-side</li>
    </ul>

    <p>When the access token expires, the client uses the refresh token to get a new one. The refresh token is stored in the database and can be revoked, giving you the performance benefits of JWTs while maintaining revocation control.</p>

    <h2>Signing Algorithms: HS256 vs RS256</h2>
    <p>Let me explain this with metaphors that make it crystal clear.</p>

    <h3>HS256 (Symmetric)</h3>
    <p>Uses one secret for everything. Think of it like a house key — the same key locks and unlocks the door.</p>

    <p>This works great if you control the whole house. Fast, simple, secure.</p>

    <h3>RS256 (Asymmetric)</h3>
    <p>Uses a private key and a public key. Think of it like a mailbox:</p>
    <ul>
      <li>The private key means only you can put mail in (sign tokens)</li>
      <li>The public key means anyone can check what's inside (verify tokens)</li>
    </ul>

    <p>This is better when you have multiple services that need to verify tokens from a central authentication service.</p>

    <h3>When to use each:</h3>
    <ul>
      <li><strong>HS256</strong> — Simpler setups where you control everything</li>
      <li><strong>RS256</strong> — Microservices architectures where multiple services need to verify tokens from a central authentication service</li>
    </ul>

    <h2>Security Best Practices: The Mistakes That Cost You</h2>
    <p>These are the mistakes I see constantly in code reviews and security audits. They're all completely avoidable.</p>

    <h3>1. Always Use HTTPS</h3>
    <p>I don't care which authentication method you choose — Basic Auth, bearer tokens, or JWT. None of them are secure over plain HTTP.</p>

    <p>HTTPS encrypts the entire request, including headers. No exceptions. This isn't optional. It's mandatory.</p>

    <h3>2. Token Storage Matters</h3>
    <p>Where you store tokens on the client side has security implications.</p>

    <h4>Option A: Local Storage</h4>
    <p>❌ Vulnerable to XSS (cross-site scripting)<br>
    If an attacker injects malicious JavaScript into your page and bypasses Content Security Policy, it can read local storage and steal tokens</p>

    <h4>Option B: HTTP-Only Cookies</h4>
    <p>✅ Can't be accessed by JavaScript (protects against XSS)<br>
    ❌ Vulnerable to CSRF (cross-site request forgery)</p>

    <h4>The Solution:</h4>
    <p>Use HTTP-only cookies with the SameSite attribute set to Strict or Lax:</p>
    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict</code></pre>

    <p>This provides protection against both XSS and CSRF attacks.</p>

    <h3>3. Set Appropriate Expiration Times</h3>
    <ul>
      <li><strong>Access tokens</strong> — Short-lived (15–30 minutes)</li>
      <li><strong>Refresh tokens</strong> — Longer-lived (7–30 days)</li>
    </ul>

    <p>Don't create a JWT that's valid for a year. That's a year-long security window if it gets stolen.</p>

    <h3>4. Never Roll Your Own Crypto</h3>
    <p>Use established libraries for JWTs:</p>
    <ul>
      <li><strong>Node.js</strong> — jsonwebtoken</li>
      <li><strong>Python</strong> — PyJWT</li>
      <li><strong>Java</strong> — java-jwt</li>
      <li><strong>Go</strong> — golang-jwt/jwt</li>
    </ul>

    <p>These libraries have been tested, audited, and battle-hardened in production. Your custom implementation probably hasn't.</p>

    <h3>5. Whitelist JWT Algorithms</h3>
    <p>There's a classic vulnerability where attackers change the algorithm from RS256 to none or HS256 to bypass signature verification.</p>

    <p>While most modern JWT libraries protect against this by default, you should still explicitly specify the expected algorithm when verifying:</p>

    <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>jwt.verify(token, secret, { algorithms: ['HS256'] });</code></pre>

    <p>This defense-in-depth measure prevents algorithm confusion attacks and protects you even if your library has vulnerabilities.</p>

    <h2>Decision Framework: Which Method Should You Use?</h2>
    <p>Let me give you a practical decision framework based on real-world requirements.</p>

    <h3>Choose Basic Auth When:</h3>
    <ul>
      <li>Building an internal tool that only your team uses</li>
      <li>Working in local development</li>
      <li>Creating machine-to-machine communication where you control the network</li>
      <li>Prototyping quickly</li>
    </ul>

    <p>Basic Auth with HTTPS is perfectly fine for these use cases. Simple, effective, no overengineering.</p>

    <h3>Choose Opaque Bearer Tokens When:</h3>
    <ul>
      <li>Building a simpler application without massive scale requirements</li>
      <li>You need easy token revocation</li>
      <li>You already have session infrastructure</li>
      <li>Database lookups aren't a performance bottleneck</li>
    </ul>

    <p>Don't overengineer. For many applications, the database lookup isn't a performance problem, and opaque tokens are easier to implement and manage.</p>

    <h3>Choose JWTs When:</h3>
    <ul>
      <li>You need to scale horizontally with multiple servers</li>
      <li>You want to minimize database load</li>
      <li>You're building microservices that need to verify tokens independently</li>
      <li>You need stateless authentication</li>
      <li>Performance is critical</li>
    </ul>

    <p>JWTs shine in distributed systems and high-scale applications.</p>

    <p>The key principle: <strong>Match the complexity of your authentication system to the complexity of your actual requirements.</strong></p>

    <p>Don't use JWTs just because they're trendy. If simple sessions work fine for your use case, use simple sessions.</p>

    <h2>Recap: What We've Learned</h2>
    <p>Let's consolidate everything we've covered:</p>

    <h3>Basic Auth:</h3>
    <ul>
      <li>Simplest HTTP authentication scheme</li>
      <li>Requires HTTPS (credentials sent with every request)</li>
      <li>Best for internal tools and development</li>
    </ul>

    <h3>Bearer Authorization Scheme:</h3>
    <ul>
      <li>Transport mechanism for tokens</li>
      <li>The "envelope" that carries the "letter"</li>
      <li>Can carry opaque tokens or JWTs</li>
    </ul>

    <h3>Opaque Tokens:</h3>
    <ul>
      <li>Random strings stored server-side</li>
      <li>Require database lookups on every request</li>
      <li>Easy to revoke</li>
      <li>Good for simpler applications</li>
    </ul>

    <h3>JWTs:</h3>
    <ul>
      <li>Self-contained tokens with embedded data</li>
      <li>Fast to verify (no database lookup)</li>
      <li>Stateless and scalable</li>
      <li>Harder to revoke without additional infrastructure</li>
      <li>Never put sensitive data in the payload (it's readable)</li>
    </ul>

    <h3>Security Essentials:</h3>
    <ul>
      <li>Always use HTTPS</li>
      <li>Store tokens in HTTP-only cookies with SameSite</li>
      <li>Set appropriate expiration times</li>
      <li>Use established libraries</li>
      <li>Whitelist algorithms</li>
    </ul>

    <h2>What's Next: OAuth 2.0 and Beyond</h2>
    <p>In part two of this series, we'll dive deep into:</p>
    <ul>
      <li><strong>OAuth 2.0</strong> — How "Sign in with Google" actually works under the hood</li>
      <li><strong>The different grant types</strong> — Authorization Code, Client Credentials, and more</li>
      <li><strong>PKCE</strong> — Protecting mobile and single-page applications</li>
      <li><strong>OpenID Connect</strong> — Adding authentication on top of OAuth</li>
      <li><strong>Single Sign-On</strong> — Enterprise authentication patterns</li>
    </ul>

    <p>These are more complex protocols that build on the foundations we learned today.</p>

    <h2>Final Thoughts</h2>
    <p>Authentication is one of those topics that seems simple on the surface but reveals layers of complexity as you dig deeper. The methods we covered today — Basic Auth, bearer tokens, and JWTs — form the foundation of modern web security.</p>

    <p>The most important takeaway? Choose the right tool for your specific requirements. Don't reach for JWTs because everyone else is using them. Don't avoid Basic Auth just because it seems "too simple."</p>

    <p>Understand the trade-offs, evaluate your needs, and build authentication that's appropriate for your application's scale, complexity, and security requirements.</p>

    <p>Because at the end of the day, the best authentication system is the one that keeps your users secure while letting you ship features confidently.</p>

    <p>Have questions about authentication or suggestions for topics to cover in part two? Drop a comment below. And if you found this helpful, share it with a fellow developer who's wrestling with authentication decisions.</p>

    <div style="margin-top: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;" class="tags-box">
      <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af">Tags:</strong> Authentication, API Security, JWT, OAuth, Web Development, Backend, Security Best Practices</p>
    </div>
  `,
},
  {
    slug: "usereducer-vs-usestate",
    title:
      "useReducer vs. useState: Understanding the Key Differences in React",
    image: "/images/blogs/react-hooks.png",
    language: "en",
    languageColor: "bg-blue-500 dark:bg-blue-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "React provides multiple ways to manage state in functional components. Learn when to use useState vs useReducer and understand their key differences.",
    date: "2025-03-09",
    content: `
      <h2>useState vs useReducer in React — When to Use What?</h2>
      <p>React provides multiple ways to manage state in functional components, with <strong>useState</strong> and <strong>useReducer</strong> being two of the most commonly used hooks. While useState is simple and intuitive, useReducer offers better control for complex state logic. In this article, we'll explore the differences between useState and useReducer, their use cases, and how to decide which one to use in your React application.</p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 2rem 0; border-radius: 0.5rem;" class="warning-box">
        <p style="margin: 0; color: #92400e;"><strong style="color: #92400e;">A common myth:</strong> "If you're using too many useState calls, you should switch to useReducer."</p>
        <p style="margin: 0.5rem 0 0 0; color: #92400e;"><strong style="color: #92400e;">The reality?</strong> It's not about how many state variables you have — it's about how complex their interactions are!</p>
      </div>

      <p>Many developers worry when they see multiple useState hooks in a component. But having 5, 6, or even more separate state variables isn't inherently bad. If each piece of state is independent and serves a clear, distinct purpose, multiple useState calls keep the code clean and easy to understand.</p>

      <p>The key principle is <strong>state colocation</strong> — ensuring that state is managed as close as possible to where it's actually needed. If your component is handling things like a username, email, theme selection, and a few UI toggles, keeping these in separate useState hooks makes perfect sense.</p>

      <p>However, when your state transitions start resembling a domino effect — where changing one value impacts multiple others — it's time to consider useReducer. The issue isn't the number of states but how interconnected and complex the updates are.</p>

      <blockquote style="border-left: 4px solid #6366f1; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #64748b;">
        Think of useState as individual buttons on a remote control — each performing a simple action. But when managing state feels more like adjusting multiple sliders on a soundboard, with one change affecting others, useReducer is the better tool for the job!
      </blockquote>

      <h2>Understanding useState</h2>
      <p>useState is a React Hook that allows functional components to manage local state. It is best suited for simple state logic, such as toggling values, updating numbers, or managing form inputs.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3>When to Use useState</h3>
      <ul>
        <li>When the state updates are straightforward.</li>
        <li>When state transitions do not depend on the previous state in a complex way.</li>
        <li>When working with independent pieces of state.</li>
      </ul>

      <h2>Understanding useReducer</h2>
      <p>useReducer is a more advanced alternative to useState, particularly useful when state logic involves multiple sub-values or complex transitions.</p>

      <h3>Example of useReducer</h3>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() => dispatch({ type: "increment" })}&gt;
        Increment
      &lt;/button&gt;
      &lt;button onClick={() => dispatch({ type: "decrement" })}&gt;
        Decrement
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

      <h3>When to Use useReducer</h3>
      <ul>
        <li>When state transitions depend on the previous state.</li>
        <li>When managing complex state logic that involves multiple actions.</li>
        <li>When working with state that is shared across multiple components (often combined with useContext).</li>
      </ul>

      <h2>Key Differences: useState vs. useReducer</h2>
      <p>useState is best suited for simple state updates and works well with primitive or independent values. It allows direct state modifications, such as <code>setCount(count + 1)</code>, making it easy to use for straightforward scenarios. However, excessive use of useState can sometimes lead to unnecessary re-renders.</p>
      
      <p>On the other hand, useReducer is designed for handling complex state logic, especially when dealing with objects or interrelated states. Instead of direct updates, it relies on a reducer function to structure state transitions, which helps optimize re-renders and maintain a more predictable state management flow.</p>

      <p>If your state changes involve simple toggles or independent values, useState is a good choice, but if your state transitions are intricate and interdependent, useReducer is often the better approach.</p>

      <h2>Performance Considerations</h2>
      <ul>
        <li>useReducer can optimize performance when state updates are frequent or complex by avoiding unnecessary re-renders.</li>
        <li>Using <code>useCallback</code> and <code>React.memo</code> with useReducer can further enhance performance when passing state-modifying functions to child components.</li>
      </ul>

      <h2>Combining useReducer with useContext</h2>
      <p>useReducer is commonly used with useContext for global state management, offering a lightweight alternative to state management libraries like Redux.</p>

      <h3>Example of useReducer with useContext</h3>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>import { useReducer, createContext, useContext } from "react";

const CounterContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    &lt;CounterContext.Provider value={{ state, dispatch }}&gt;
      {children}
    &lt;/CounterContext.Provider&gt;
  );
}

export function useCounter() {
  return useContext(CounterContext);
}</code></pre>

      <p>By wrapping your application in <code>CounterProvider</code>, you can access the state and dispatch function from any component without prop drilling.</p>

      <h2>Conclusion</h2>
      <p>Both useState and useReducer have their own use cases:</p>
      <ul>
        <li>Use <strong>useState</strong> when managing simple state updates.</li>
        <li>Use <strong>useReducer</strong> when working with complex state transitions or when state logic needs better organization.</li>
        <li>Consider <strong>useReducer with useContext</strong> for managing global state.</li>
      </ul>

      <p>Understanding the strengths and limitations of both hooks will help you write more maintainable and efficient React applications. 🚀</p>

       <div style="margin-top: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;" class="tags-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af">Tags:</strong> React, React Hook, JavaScript, TypeScript, Programming</p>
      </div>
    `,
  },
  {
    slug: "javascript-factory-functions",
    title: "JavaScript'te Factory Fonksiyonları #3",
    image: "/images/blogs/factory3.png",
    language: "tr",
    languageColor: "bg-red-500 dark:bg-red-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "Factory fonksiyonları nedir, neden kullanılır ve nasıl kullanılır? JavaScript'te obje oluşturmanın modern yollarını keşfedin.",
    date: "2024-05-09",
    content: `
      <p>Özetle yeni bir obje yaratıp bunu dönen fonksiyonlara <strong>'factory functions'</strong> olarak adlandırıyoruz. Fakat neden bir obje yaratmak için fonksiyona ihtiyacımız var ki?</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>// aşağıdaki kullanım yetmiyor mu?
const obj = {...}</code></pre>

      <p>Aslında problem birden fazla objeye ihtiyacımız olduğunda başlıyor. Hele ki bu objeler birbirlerine küçük farklılıklar dışında benzerlikler gösteriyorsa. Anlatmak istediğim husus, tüm aile üyelerinizi ayrı birer obje olarak oluşturduğunuzu hayal edin. Hepsinin konuşma özelliği olacak değil mi, aşağıdaki gibi.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const ben = {
  isim: 'Emre',
  konus() {
    return \`Merhaba ben \${this.isim}!\`
  }
}

const Cücü = {
  isim: 'Cücü',
  konus() {
    return \`Merhaba ben \${this.isim}!\`
  }
}</code></pre>

      <h2>İlk Problem: Dışarıdan Müdahale</h2>
      <p>İlk problem mesela <code>ben</code> objesine müdahale ettiğimizde başlayacak.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>ben.isim = 'Hayri'</code></pre>

      <p>Artık <code>ben.konus()</code> fonksiyonunu çağırdığımızda Hayri olarak dönecek. Normalde 'ben' objesinin ismini dönmesi gereken fonksiyon dışarıdan müdahaleye maruz kaldı ve bu beraberinde başka hataları da tetikleyebilir. Burada bu hatada görüldüğü üzere <code>konus</code> metodu ile ilgili değil. Ve bunu büyüyen bir projede debug etmesi ve hatayı bulmak zor olabilir.</p>

      <h2>İkinci Problem: Kod Tekrarı (Code Duplication)</h2>
      <p>İkinci ve daha büyük hata ise burada <code>konus</code> metodunu birden fazla kodlanmış olması (code duplication). Buna daha önce prototipleri anlatırken değinmiştim. Projenizde buna benzer yüz tane objeniz olduğunu varsayın, hepsini tek tek gidip test mi edeceğiz? Tabiki hayır. Bırakın beş veya on kez tekrarı, iki defa bile kodumuzu tekrar etmemeliyiz. Bu hataya düşmemek içinse daha iyi kod kalıpları, dizaynları kullanabiliriz. Bunlardan biri ise <strong>'factory function'</strong>.</p>

      <h2>Factory Fonksiyonları Nedir?</h2>
      <p>Factory fonksiyonları aslında müthiş bir kod modeli ve bildiğimiz fabrikaların -ürünlerin girip, belli proseslerden geçip, ortaya ürünün çıkarıldığı- yaptığı işten farklı bir şey yapmıyorlar.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>function kisi(name) {
  return {
    konus() {
      return \`Merhaba, ben \${name}!\`
    }
  }
}

const ben = kisi('emre')

ben.konus()
// 'Merhaba, ben emre!'</code></pre>

      <p>Artık on tane de yüz tane de kisi oluşturmak zorunda olsak, kendimizi tekrardan kurtulduk ve tabiki buradaki mantık çok daha karmaşık olabilir fakat burdaki gerçek, oluşturma işlemini sadece bir yerde yaptık ve bir hata ile karşılaştığımızda sadece bir yere bakmamız gerekecek.</p>

      <h2>Factory Fonksiyonlarının Faydaları</h2>
      <p>Factory fonksiyonlarının yararlarını tekrar etmek gerekirse:</p>
      <ul>
        <li><strong>Kurulum yok:</strong> Karışıklık da yok ve setup gerektiren, super çağırman gereken gibi sınıfların aksine okuması gerçekten çok kolay. Tabiki sınıflar da harika fakat az kod yazman gerektiğinde gerçekten çok efektif.</li>
        <li><strong>Kod tekrarı yok:</strong> Kod mantığımız tek bir yerde izole edildi.</li>
        <li><strong>Veri gizliliği:</strong> İstesek bile bu nesnelerden birinin adını değiştiremem, yani ismin kendisi objemizin bir parçası olan iç fonksiyonda bir tür koruma altındadır.</li>
      </ul>

      <h2>Pratik Örnek: HTML Element Oluşturma</h2>
      <p>Hadi biraz daha örneklendirelim.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>function elemanOlusturma(tip, metin, renk) {
  const el = document.createElement(tip)
  el.innerText = metin
  el.style.color = renk
  document.body.append(el)
  
  return {
    el,
    setText(metin) {
      el.innerText = metin
    },
    setColor(renk) {
      el.style.color = renk
    }
  }
}</code></pre>

      <p>Bir html elementleri oluşturmak için bir factory fonksiyonu oluşturduğumuzu varsayalım. Böyle bir örnek her ne kadar iyi bir fikir olmasa da, çünkü bu fonksiyonlar elemanları DOM'a eklemek gibi bir sorumlulukları yok, fakat bir şeyleri kanıtlamak açısından güzel bir örnek.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const title = elemanOlusturma('h1', 'Merhabaaa!!!', 'red')</code></pre>

      <p>Tarayıcıda <code>title</code>'ı çağırdığınızda içerisinde geçmiş olduğunuz parametreleri göreceksiniz ve ayrıca üzerine tıklayıp giderseniz tarayıcınızda <code>&lt;h1 style='color: red'&gt; Merhaba!! &lt;/h1&gt;</code> şeklinde görebilirsiniz.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>h1.setText('Bay bay!!')</code></pre>

      <p>Artık oluşturduğunuz elemanın metini değişmiş olacak.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const paragraf = elemanOlusturma('p', 'Lorem ipsum', 'blue')</code></pre>

      <p>Artık istediğimiz tipte, istediğimiz içerik ve renk ile eleman oluşturabiliriz ve her seferinde artık aynı adımları tekrar etmemize gerek yok. Tek yapmamız gereken gerekli bilgileri oluşturduğumuz fonksiyona aktarmak.</p>

      <h2>Sonuç</h2>
      <p>Bir sonraki yazımda Factory fonksiyonlarının bazı eksikliklerinden bahsetmeyi düşünüyorum, mükemmel değiller ve bazı sorunları var. Bunları çözmek için ise gerçek bir miras, kalıtım ile gelen Constructor fonksiyonlarına değineceğiz. Esenliklerde kalın. 👋</p>

      <div style="margin-top: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;" class="tags-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af">Tags:</strong> JavaScript, Türkçe, Code, Factory Functions, OOP</p>
      </div>
    `,
  },
  {
    slug: "javascript-inheritance-2",
    title: "JavaScript'te Inheritance #2",
    image: "/images/blogs/factory1.png",
    language: "tr",
    languageColor: "bg-red-500 dark:bg-red-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "Prototype ile __proto__ arasındaki fark ve prototype chain denilen prototip zincirine derinlemesine bakış.",
    date: "2023-10-22",
    content: `
      <p>Bir önceki yazımızın devamı niteliğinde olan bu yazımızda <strong>prototype</strong> ile <strong>__proto__</strong> arasındaki fark ile <strong>prototype chain</strong> denilen prototip zincirine derinlemesine bakacağız.</p>

      <h2>__proto__ ve Prototype Nedir?</h2>
      <p>Aşağıdaki örneklere bir göz atalım. Yeni bir obje oluşturduk. Biz burada object literal kullandık fakat önceki yazımızda yeni bir nesne oluşturmanın yönlerini öğrenmiştik. Örnek olarak oluşturmuş olduğumuz nesnenin sadece isim ve yaş özellikleri bulunmasına rağmen <code>uçmak</code> gibi bulunmayan bir fonksiyon girdiğimizde <code>undefined</code> dönüyor.</p>

      <p>Peki <code>valueOf</code> ya da <code>constructor</code> fonksiyonlarını biz oluşturmadık. Bunlar nereden geliyor? Objeninin <code>__proto__</code>'sundan ulaşabiliyoruz.</p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 2rem 0; border-radius: 0.5rem;" class="warning-box">
        <p style="margin: 0; color: #92400e;"><strong style="color: #92400e;">Önemli Not:</strong> Örneklerde objenin içine girdiğimizde <code>__proto__</code> diye bir şey yok aksine <code>[[Prototype]]</code> var. Çünkü arkadaşlar <code>__proto__</code> kullanımdan kaldırıldı (deprecated).</p>
        <p style="margin: 0.5rem 0 0 0; color: #92400e;">Fakat hala <code>__proto__</code> özelliğini kullanabiliyoruz. Yeni kullanım ise: <code>Object.getPrototypeOf(obj)</code></p>
      </div>

      <p>Yani bir nesne oluşturduğumuzda ona otomatik olarak bir <code>__proto__</code> özelliği atılıyor ve o da ayrı bir nesne. Aslında biz her ne şekilde nesne türetirsek türetelim <strong>Object</strong> nesnesinden bir instance türetmekteyiz. Bu nedenle türettiğimiz nesne bu büyük O ile başlayan Object sınıfının bütün özelliklerini miras olarak alır.</p>

      <h2>Array ve String'in Prototype Zinciri</h2>
      <p>Burada farklı bir şeyi de sizlere göstermek istiyorum. Yeni bir array oluşturduğunuzda gördüğünüz gibi o da <strong>Array</strong>'den türetilmektedir. Fakat <code>[[Prototype]]</code> (<code>__proto__</code>) içerisine girerseniz en altta onun da kendi <code>__proto__</code>'su Object olduğunu göreceksiniz.</p>

      <blockquote style="border-left: 4px solid #6366f1; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #64748b;">
        Yani myAnimals Array'den türetiliyor, Array ise Object'ten. Bu string için de geçerlidir.
      </blockquote>

      <h2>Prototype Chain (Prototip Zinciri)</h2>
      <p>Biraz daha örneklere dalalım. Soldaki örnekte gördüğünüz gibi Emre nesnesini <code>person</code>'dan türetip bir yaş özelliği ekledik. Cinsiyet özelliğine direk ulaşabiliyoruz çünkü bu özellik bizim protomuzda mevcut.</p>

      <p>Sağ tarafta ise işler biraz daha ilginçleşiyor. Bu sefer Emre nesnesinden Faris nesnesi türetip yaş özelliği ekleyelim. Gördüğümüz gibi cinsiyet özelliği 'male' gelirken yaş özelliği 34 geliyor çünkü direkt olarak içerisinde. Fakat protosuna girdiğimizde ise Emre nesnesinden türetildiği için orada yaş 28.</p>

      <h2>Class Yapısında Prototype Chain</h2>
      <p>Şimdi ise sınıf yapısına bakalım biraz. <code>Person</code> classımız var ve bundan bir <code>SuperHero</code> classı extend ettik ve Emre diye bir yeni nesneyi SuperHero sınıfından türettik.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>class Person {
  talk() {
    return 'Talking'
  }
}

class SuperHero extends Person {
  fly() {
    return 'Flying'
  }
}

const Emre = new SuperHero()

Emre.talk() // 'Talking'
Emre.fly() // 'Flying'
Emre.jump() // undefined</code></pre>

      <p>Gördüğünüz gibi hem <code>talk</code> hem de <code>fly</code> metotlarına ulaşabilirken <code>jump</code> metodu <code>undefined</code> geliyor. Neden?</p>

      <p><strong>Çünkü JavaScript siz bir metoda ya da özelliğe ulaşmak istediğinizde önce o objeye, array'a ya da her ne ise ona bakar, yoksa protosuna gider, orada da yoksa onun protosuna. Ana objeye, sınıfa ulaşana kadar bunu tekrar eder işte buna <span style="color: #6366f1; font-weight: bold;">prototype chain</span> denmektedir ve bulamaz ise undefined döner.</strong></p>

      <h2>Prototype vs __proto__</h2>
      <p>Bu zamana kadar <code>__proto__</code>'dan bahsettik peki <code>prototype</code> nedir? <code>Emre.__proto__</code> object dönerken neden <code>Emre.prototype</code> undefined dönmekte?</p>

      <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 2rem 0; border-radius: 0.5rem;" class="info-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af;">Çünkü prototype property herhangi bir nesneye ya da instance'a ait değildir. Sadece constructor fonksiyonuna ya da sınıflara aittir.</strong></p>
      </div>

      <p>Aşağıdaki örneğe bakarsak daha iyi anlayacağız:</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>function Coco(name) {
  this.name = name
}

const emre = new Coco('Emre')

emre.prototype // undefined (bir constructor fonksiyon değil)
emre.__proto__ === Coco.prototype // true</code></pre>

      <h2>Sonuç</h2>
      <p>Kısaca özetlersek:</p>
      <ul>
        <li><strong>__proto__</strong> her değişkenin parent elemanından miras aldığı nesneyi gösteren bir özelliktir.</li>
        <li><strong>prototype</strong> ise constructor fonksiyonun içerisinde bulunan ve instance'ı tarafından miras alınacak her şeyi barındıran bir özelliktir.</li>
      </ul>

      <blockquote style="border-left: 4px solid #6366f1; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #64748b;">
        Evet aslına bakarsak tamamen aynı şeylerdir fakat farklı uçlardan eriştiğimizde!
      </blockquote>

      <p>Bir sonraki yazımızda görüşmek dileğiyle. Esenlikte kalın ✋🏼</p>

      <div style="margin-top: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;" class="tags-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af">Tags:</strong> JavaScript, OOP, Prototype, Inheritance, Türkçe</p>
      </div>
    `,
  },
  {
    slug: "javascript-inheritance-1",
    title: "JavaScript'te Inheritance ve Prototype Tabanlı Kalıtım #1",
    image: "/images/blogs/factory1.png",
    language: "tr",
    languageColor: "bg-red-500 dark:bg-red-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "JavaScript'te inheritance nedir, neden kullanılır? Class yapısı ve prototypal inheritance ile kod tekrarından kurtulun.",
    date: "2023-07-28",
    content: `
      <p>Evet arkadaşlar inheritance'dan kasıt tabiki babanızdan kalan miras değil 😄 Çoğunlukla kod tekrarını önlemek için yazılan ve aynı kodu tekrar tekrar yazmak zorunda kalmamak için kullanılır.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
  }
  
  getGrade() {
    return this.grade;
  }
}

const student = new Student('John', 'Doe', 'A');
console.log(student.getFullName()); // John Doe
console.log(student.getGrade()); // A</code></pre>

      <p>Inheritance çoğu kişi tarafından class yapısı ile ilişkilendirilir. JavaScript'e başka bir dilden geliyorsanız, muhtemelen class yapısını kullanmaya aşinasınızdır. JavaScript'te inheritance class yapısını kullanarak da kullanmayarak da yapılabilir. Fakat önce daha kolay anlamak için class yapısı ile ilerleyelim.</p>

      <h2>Kod Tekrarı Problemi</h2>
      <p>Aşağıdaki örneğe bakalım:</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const marti = {
  fly() {
    return 'Flying'
  }
}

marti.fly(); // 'Flying'

const leylek = {
  fly() {
    return 'Flying'
  }
}

leylek.fly(); // 'Flying'</code></pre>

      <p>Evet burada ne tür bir sorunumuz var? <strong>Aynı methodu iki kez yazdık.</strong></p>

      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 2rem 0; border-radius: 0.5rem;" class="warning-box">
        <p style="margin: 0; color: #92400e;"><strong style="color: #92400e;">Problem #1:</strong> Aynı adımı tekrar ediyoruz ve programlamada her zaman bunun için daha iyi bir yol vardır.</p>
        <p style="margin: 0.5rem 0 0 0; color: #92400e;"><strong style="color: #92400e;">Problem #2:</strong> Ya projemizde sadece martı ve leylek değil de onlarca kuş olsa? Günün sonunda çok fazla kod tekrarı ile karşılaşmış olursunuz.</p>
      </div>

      <p>İkinci olaraksa, kodda bir yeri güncellemeniz gerektiğini ya da fonksiyonda bir hatayı düzeltmeniz gerektiğini düşünün. Bu fonksiyonu onlarca nesne için kopyaladığımız için birçok farklı yerde bu düzeltmeyi ya da güncellemeyi yapmamız gerekecek. <strong>Bunu düzelmenin yolu ise Inheritance kullanmak.</strong></p>

      <h2>Class ile Inheritance</h2>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>class Bird {
  fly() {
    return 'Flying'
  }
}

const marti = new Bird();
const leylek = new Bird();

marti.fly(); // 'Flying'
leylek.fly(); // 'Flying'</code></pre>

      <p>Evet peki <code>fly</code> methodunu güncellemek istersem nasıl yapacağım? Direkt <code>marti.fly = başka bir fonksiyon</code> mu demeliyiz? Maalesef böyle yapamayız çünkü martı direk <code>fly()</code> methoduna sahip değil.</p>

      <p><code>marti.fly()</code> 'Flying' dönüyor evet fakat bu nereden geliyor? Martı nesnesinin içerisine dalarsak bir <strong>prototype</strong> göreceksiniz. Bu aslında <code>__proto__</code> olarak adlandırılır.</p>

      <blockquote style="border-left: 4px solid #6366f1; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #64748b;">
        Gördüğünüz gibi martı direkt olarak fly fonksiyonuna sahip değil. Martıya bir yaş özelliği atarsak, yaş gelmesine rağmen fly gelmiyor. Çünkü uçmak bizim prototipizde yani inherit yaptığımız classımızda.
      </blockquote>

      <h2>Prototype Güncelleme</h2>
      <p>Güncellemek istiyorsak bizim classımızdaki <code>fly</code> methodunu güncellememiz gerekmektedir. Biz <code>Bird.prototype</code>'ına bakarsak benzer bir yapı görürüz. Ve <code>Bird.prototype</code> ile <code>marti.__proto__</code> tip ve değer açısından karşılaştırırsak tamamen eşit olduğunu görürüz.</p>

      <p><strong>Bu bizim için büyük bir avantaj çünkü problemi düzeltmek istediğimde parent classtaki fonksiyonumu tekrar yazarsam ondan türetmiş olduğum tüm nesnelerde bu sorun çözülmüş olur.</strong></p>

      <h2>Prototypal Inheritance</h2>
      <p>Bildiğiniz üzere JavaScript'te inheritance nesneler aracılığı ile yapılır, özellikle de <strong>prototipler</strong>. Buna <strong>prototypal inheritance</strong> denmektedir.</p>

      <p>Yukarıda yazmış olduğumuz örneklerde <code>class</code> anahtar kelimesini kullanmış olsak bile JavaScript özünde prototipleri kullanmaktadır. Class yapısı inheritance kısmını okumanın ve yazmanın kolay bir yolu. Fakat kalıtımı (inheritance) anlamanın daha kolay yolu ise prototypal inheritance.</p>

      <h2>Constructor Functions</h2>
      <p>Aslında biz Bird diye bir class oluşturduğumuzda JavaScript bizim için bir fonksiyon oluşturmakta ve prototipine gidip fly methodunu oluşturmakta.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>function Bird() {}

Bird.prototype.fly = function() {
  return 'Flying'
}

const marti = new Bird()
marti.fly() // 'Flying'</code></pre>

      <p>Bunun diğer bir yolu ise <strong>constructor function</strong> ile yapmaktır:</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>function Bird() {
  this.fly = function() {
    return 'Flying'
  }
}

const marti = new Bird()
marti.fly() // 'Flying'</code></pre>

      <p>Fakat bu sefer ufak bir fark olduğunu göreceksiniz. Martı nesnesini çağırdığınızda <code>fly</code> metodunun direkt Bird üzerinde değil martı içerisinde olduğunu görebiliriz.</p>

      <h2>Property vs Method</h2>
      <p>Eğer direkt <code>this</code> anahtar kelimesi ile bunu ekleyebiliyorsak, bizim neden prototipe ihtiyacımız var?</p>

      <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 2rem 0; border-radius: 0.5rem;" class="info-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af;">Sorun şu ki:</strong> <code>this</code> anahtar kelimesi ile eklediğimiz fonksiyon vb. artık metod olarak kabul edilmeyecek ve <strong>property</strong> olarak adlandırılan özellik olarak kabul edilecektir. Tıpkı bir string, number ya da boolean gibi.</p>
      </div>

      <p>Ve bu artık bir özellik olduğu için tüm child instance dediğimiz ana yapıdan türetilen nesnelere kopyalanacaktır. Bu da bize şu sıkıntıyı doğuracaktır: Siz eğer bu özelliği güncellemek ya da bir hatasını düzeltmek isterseniz, hepsini ayrı ayrı düzeltmeniz gerekecek.</p>

      <blockquote style="border-left: 4px solid #6366f1; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #64748b;">
        Bu yüzden sahip olunan özellikleri (properties) constructor fonksiyonundaki this objesine, metodları (methods) yani yapılabilen davranışları ana fonksiyonda prototiplere eklemek oldukça yaygındır.
      </blockquote>

      <h2>Class Extension (Genişletme)</h2>
      <p>Inheritance class yapısının bir diğer güzel özelliği ise classlar extend edilebilir yani genişletilebilir.</p>

      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>class Human {
  walk() {
    return 'Walking'
  }
}

class SuperHero extends Human {
  fly() {
    return 'Flying'
  }
}

const superman = new SuperHero()
const joe = new Human()

superman.walk() // 'Walking'
superman.fly() // 'Flying'

joe.walk() // 'Walking'
joe.fly() // undefined</code></pre>

      <p>Görüldüğü üzere superman hem uçup yürüyebiliyorken Joe ise sadece yürüyebiliyor.</p>

      <h2>Object.create() ve Object.setPrototypeOf()</h2>
      <p>Şu aşamaya kadar <code>new</code> anahtar kelimesi ile instance türetmeyi gördük peki bunun farklı yolları var mıdır?</p>

      <h3>Object.create()</h3>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const person = {
  walk() {
    return 'Walking'
  }
}

const emre = Object.create(person)
emre.walk() // 'Walking'</code></pre>

      <p><code>Object.create()</code> ile başka bir nesnenin özelliklerini, methodlarını kullanan yeni bir nesne türetebilirsiniz.</p>

      <h3>Object.setPrototypeOf()</h3>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto;"><code>const person = {
  walk() {
    return 'Walking'
  }
}

const emre = {
  name: 'Emre'
}

Object.setPrototypeOf(emre, person)
emre.walk() // 'Walking'</code></pre>

      <p>Saf (pure) nesnelerden yeni bir nesne türetmenin diğer bir yolu ise <code>Object.setPrototypeOf(türetilecek nesne, ana nesne)</code> metodur.</p>

      <h2>Sonuç</h2>
      <p>Kısaca özet geçmek gerekirse JavaScript'te inheritance yapısının kullanımı bize:</p>
      <ul>
        <li>Daha düzenli kod yazmayı</li>
        <li>Nesne yönelimli programlamayı</li>
        <li>Kod tekrarından kurtulmayı</li>
        <li>Metod ve özellikleri daha kolay yönetmemizi sağlar</li>
      </ul>

      <p>Bir sonraki yazıda görüşmek üzere. Esenlikte kalın ✋🏼</p>

      <div style="margin-top: 2rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;" class="tags-box">
        <p style="margin: 0; color: #1e40af;"><strong style="color: #1e40af">Tags:</strong> JavaScript, Inheritance, Object Oriented, OOP, Türkçe, JavaScript Tips</p>
      </div>
    `,
  },
  {
    slug: "react-custom-reusable-hooks",
    title: "How to Build React Custom Reusable Hooks",
    image: "/images/blogs/use-date.png",
    language: "en",
    languageColor: "bg-blue-500 dark:bg-blue-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "Learn how to create and use custom React Hooks to make your component logic reusable and cleaner. A simple guide with a real-world example.",
    date: "2023-02-27",
    content: `
    <p>Hooks were introduced in React 16.8, allowing developers to use state and other React features without writing class components.</p>

    <p>Building your own custom Hooks lets you extract component logic into reusable functions. A custom Hook is simply a JavaScript function whose name starts with <code>use</code> and that may call other Hooks, as defined in the React documentation.</p>

    <p>In this article, we’ll look at how to easily implement custom Hooks in a React application with a practical example.</p>

    <h2>Scenario</h2>
    <p>Imagine a social media application where every post shows a publishing date. You get the post creation date from a database, and you need to format it using the Moment.js library. However, if the date is over a month old, or specifically 7, 14, or 21 days ago, you want to display it in a different format. Since this logic appears in multiple parts of the app, it's better to build a reusable custom Hook instead of duplicating code.</p>

    <h2>Implementation</h2>
    <p>Let’s create a reusable hook called <code>useDate</code> that formats dates based on given rules:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1.5rem;border-radius:0.5rem;overflow-x:auto;"><code>import moment from "moment";

export const useDate = (day) => {
  let date = moment(day).fromNow();
  if (
    date?.includes("years") ||
    date?.includes("months") ||
    date?.includes("month") ||
    date?.includes("weeks") ||
    date?.includes("year") ||
    date?.includes("week")
  ) {
    date = moment(day).format("DD.MM.YYYY");
  } else if (date === "7 days ago") {
    date = "last week";
  } else if (date === "14 days ago") {
    date = "two weeks ago";
  } else if (date === "21 days ago") {
    date = "three weeks ago";
  } else if (date === "a day ago") {
    date = "yesterday";
  }
  return date;
};</code></pre>

    <h2>Usage Example</h2>
    <p>Now, we can call our custom Hook in any component like this:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1.5rem;border-radius:0.5rem;overflow-x:auto;"><code>import { useDate } from "../../utils/useDate";

export default function SinglePost({ post }) {
  const day = useDate(post?.createdAt);
  
  return (
    &lt;&gt;
      &lt;p&gt;{day}&lt;/p&gt;
    &lt;/&gt;
  );
}</code></pre>

    <p>The formatted date will appear according to your rules. This approach helps avoid repetitive logic and keeps your components clean and focused.</p>

    <h2>Conclusion</h2>
    <p>Creating custom Hooks in React is an effective way to encapsulate logic and make your application easier to maintain. Instead of repeating the same code across components, you can build small, reusable utilities that improve scalability and readability.</p>

    <div style="margin-top:2rem;padding:1rem;background:#f0f9ff;border-radius:0.5rem;" class="tags-box">
      <p style="margin:0;color:#1e40af;"><strong style="color:#1e40af;">Tags:</strong> React, JavaScript, React Hook, Web Development, JavaScript Tips</p>
    </div>
  `,
  },
  {
    slug: "try-mobx-instead-of-redux",
    title: "Try MobX instead of Redux for Your State Management",
    image: "/images/blogs/mobx.png",
    language: "en",
    languageColor: "bg-blue-500 dark:bg-blue-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "MobX is a powerful, battle-tested alternative to Redux for managing state in React applications. Learn how MobX simplifies reactivity, reduces boilerplate, and integrates seamlessly with React and TypeScript.",
    date: "2022-01-26",
    content: `
    <p><strong>MobX</strong> is a battle-tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP).</p>

    <h2>Why MobX?</h2>
    <ul>
      <li><strong>Straightforward:</strong> Write minimalistic, boilerplate-free code that captures your intent.</li>
      <li><strong>Effortless optimal rendering:</strong> All changes to and uses of your data are tracked at runtime, building a dependency tree that captures all relations between state and output.</li>
      <li><strong>Architectural freedom:</strong> MobX is unopinionated and allows you to manage your application state outside of any UI framework.</li>
    </ul>

    <h2>Installation</h2>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>yarn add mobx mobx-react-lite</code></pre>
    <p><code>mobx-react-lite</code> supports only functional components, while <code>mobx-react</code> also supports class-based components.</p>

    <h2>Core Concepts</h2>
    <h3>1. State</h3>
    <p>State is like spreadsheet cells that hold a value. You can store it in objects, arrays, or classes. Mark properties you want to change as <code>@observable</code> so MobX can track them.</p>

    <h3>2. Actions</h3>
    <p>An <code>@action</code> is any function that modifies the state. Marking actions helps MobX batch and optimize state updates.</p>

    <h3>3. Derivations</h3>
    <p>Anything that can be derived from the state without user input is a derivation, such as computed values or reactions. MobX distinguishes between:</p>
    <ul>
      <li><strong>Computed values</strong> – derived data using pure functions</li>
      <li><strong>Reactions</strong> – side effects triggered automatically by state changes</li>
    </ul>

    <blockquote style="border-left:4px solid #6366f1;padding-left:1rem;color:#64748b;">
      Always use <code>@computed</code> for deriving values and <code>@action</code> for modifying state.
    </blockquote>

    <h2>Making Objects Observable</h2>
    <p>The simplest way to make an object observable is by using <code>makeObservable</code> or <code>makeAutoObservable</code> inside a class constructor.</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1.5rem;border-radius:0.5rem;overflow-x:auto;"><code>import { action, computed, makeObservable, observable } from "mobx";

class CustomerStore {
  customers = [];

  constructor() {
    makeObservable(this, {
      customers: observable,
      addCustomer: action,
      customerCount: computed,
    });
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  get customerCount() {
    return this.customers.length;
  }
}</code></pre>

    <h2>React Integration</h2>
    <p>MobX integrates seamlessly with React using the <code>observer</code> higher-order component from <code>mobx-react-lite</code>.</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>import { observer } from "mobx-react-lite";

const CustomerList = observer(({ store }) => (
  &lt;ul&gt;
    {store.customers.map(c => (
      &lt;li key={c.id}&gt;{c.name}&lt;/li&gt;
    ))}
  &lt;/ul&gt;
));</code></pre>

    <h3>Context Setup</h3>
    <p>Wrap your app in a context provider to share the store:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>import React, { createContext, useContext } from "react";
import CustomerStore from "../stores/CustomerStore";

const StoreContext = createContext(new CustomerStore());
export const useStore = () =&gt; useContext(StoreContext);
</code></pre>

    <h2>Optimization Tips</h2>
    <ul>
      <li>Split your UI into smaller observer components for optimal re-rendering.</li>
      <li>Render lists in dedicated components to improve performance.</li>
      <li>Avoid using array indexes as React keys — use unique IDs instead.</li>
      <li>Dereference values late for faster rendering:
        <br /><code>&lt;DisplayName person={person} /&gt;</code> is faster than <code>&lt;DisplayName name={person.name} /&gt;</code>.
      </li>
    </ul>

    <h2>Conclusion</h2>
    <p>MobX offers a simple and reactive approach to state management that drastically reduces boilerplate compared to Redux. It’s an excellent choice for scalable React applications that need clean, efficient reactivity with minimal configuration.</p>

    <div style="margin-top:2rem;padding:1rem;background:#f0f9ff;border-radius:0.5rem;" class="tags-box">
      <p style="margin:0;color:#1e40af;"><strong style="color:#1e40af;">Tags:</strong> MobX, Redux, TypeScript, Web Development, JavaScript</p>
    </div>
  `,
  },
  {
    slug: "setup-typescript-on-cypress",
    title: "Set Up TypeScript on Cypress in 4 Steps Easily",
    image: "/images/blogs/cypress.png",
    language: "en",
    languageColor: "bg-blue-500 dark:bg-blue-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "Learn how to set up TypeScript in your Cypress testing environment in just 4 simple steps — from installation to creating custom commands and using plugins.",
    date: "2022-01-11",
    content: `
    <p>This guide walks you through upgrading your JavaScript-based Cypress test suite to TypeScript in four simple steps. TypeScript improves your Cypress setup with type safety, autocompletion, and cleaner, reusable testing logic.</p>

    <h2>Step 1: Install TypeScript</h2>
    <p>To get started, add TypeScript as a dev dependency:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>npm install typescript --save-dev
# or
yarn add typescript --dev</code></pre>

    <p>After installation, initialize TypeScript by creating a <code>tsconfig.json</code> file in your Cypress project.</p>

    <h2>Step 2: Create tsconfig.json</h2>
    <p>The <code>tsconfig.json</code> file defines how TypeScript should compile your Cypress tests. Here's an example setup:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress"],
    "moduleResolution": "node",
    "esModuleInterop": true
  },
  "include": ["**/*.ts"]
}</code></pre>

    <p>We target ES6 for modern browsers and include the Cypress type definitions to leverage IntelliSense in your test files.</p>

    <h2>Step 3: Add Type Declarations (index.d.ts)</h2>
    <p>To extend Cypress with custom commands, create a <code>index.d.ts</code> file under <code>cypress/support</code>. First, remove the default <code>commands.js</code> and <code>index.js</code> files, then replace them with TypeScript equivalents.</p>

    <p>Your folder structure should look like this:</p>
    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>cypress/
  └── support/
      ├── commands/
      │   └── customCommand.ts
      ├── index.d.ts
      └── index.ts</code></pre>

    <p>Here’s how you can declare a custom command type:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>declare namespace Cypress {
  interface Chainable {
    fillForm(): void;
  }
}</code></pre>

    <p>In your <code>customCommand.ts</code>, implement the command:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>Cypress.Commands.add("fillForm", () => {
  cy.get("input[name='username']").type("Emre");
  cy.get("input[name='password']").type("123456");
  cy.get("button[type='submit']").click();
});</code></pre>

    <p>Finally, import your commands inside <code>support/index.ts</code>:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>import './commands/customCommand';</code></pre>

    <p>Now you can use <code>cy.fillForm()</code> in your test cases without importing it manually.</p>

    <h2>Step 4: Configure Plugins</h2>
    <p>Some Cypress plugins require extra TypeScript configuration. For example, to use the <code>cypress-cucumber-preprocessor</code> plugin:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>npm install --save-dev cypress-cucumber-preprocessor
npm install --save-dev @types/cypress-cucumber-preprocessor @cypress/browserify-preprocessor</code></pre>

    <p>Then modify <code>cypress/plugins/index.js</code>:</p>

    <pre style="background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:0.5rem;overflow-x:auto;"><code>const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };
  on('file:preprocessor', cucumber(options));
};</code></pre>

    <p>And that’s it — your Cypress setup is now fully compatible with TypeScript.</p>

    <h2>Conclusion</h2>
    <p>Switching your Cypress project to TypeScript enhances type safety, improves code readability, and enables IntelliSense for your test suite. It’s easy to integrate and provides a smoother development experience, especially if your main project already uses TypeScript.</p>

    <div style="margin-top:2rem;padding:1rem;background:#f0f9ff;border-radius:0.5rem;" class="tags-box">
      <p style="margin:0;color:#1e40af;"><strong style="color:#1e40af;">Tags:</strong> TypeScript, Cypress, Web Development, JavaScript, Programming</p>
    </div>
  `,
  },
  {
    slug: "scrum-mobile-app-development",
    title:
      "Implementierung eines Entwicklungsprozesses für mobile Anwendungen nach der Scrum-Methode",
    image: "/images/blogs/scrumde.png",
    language: "de",
    languageColor: "bg-yellow-500 dark:bg-yellow-400",
    category: "tech",
    categoryColor: "bg-green-500 dark:bg-green-400",
    excerpt:
      "Diese Studie zeigt, wie ein Entwicklungsprozess für mobile Anwendungen mit der Scrum-Methode umgesetzt werden kann, von der Teamaufstellung bis zur Markteinführung.",
    date: "2021-07-09",
    content: `
    <p>Zusammenfassung — Ziel dieser Studie ist es, Vorschläge für den Entwicklungsprozess mobiler Anwendungen zu machen, basierend auf Erfahrungen in einem Scrum-Projekt. Der Prozess einer mobilen Anwendung für den Bereich klinischer Forschung wird dabei ausführlich erläutert, inklusive Teamaufstellung, Bedarfsanalyse, Umgang mit Änderungen und Sicherstellung von Transparenz und Audit.</p>

    <h2>1. Einleitung</h2>
    <p>Mit der zunehmenden Nutzung mobiler Geräte steigt der Bedarf an mobilen Anwendungen. Diese Apps müssen physikalische Eigenschaften wie Gerätegröße, Bildschirmgröße, Eingabemethoden sowie technische Eigenschaften wie Rechenleistung, Speicher und Betriebssystem berücksichtigen. Traditionelle Softwareentwicklungsprozesse stoßen bei den sich schnell ändernden Anforderungen mobiler Apps an ihre Grenzen. Daher ist eine agile Methodik, insbesondere Scrum, sinnvoll.</p>

    <h2>2. Agile Softwareentwicklungsmethode</h2>
    <p>Agile Methoden betonen die Interaktion zwischen allen Projektbeteiligten und eine enge Zusammenarbeit mit dem Kunden. Sie ermöglichen schnelle Anpassung an Änderungen und erhöhen die Flexibilität, Produktivität und Wettbewerbsfähigkeit der Softwareentwicklung.</p>

    <h3>2.1 Agile Ansätze in der mobilen Anwendungsentwicklung</h3>
    <ul>
      <li><strong>MOBIL-D:</strong> Optimiert für Teams unter zehn Entwicklern, schnelle Bereitstellung einer voll funktionsfähigen mobilen App.</li>
      <li><strong>MASAM:</strong> Agiler Ansatz für schnelle Entwicklung mobiler Anwendungen.</li>
      <li><strong>Scrum:</strong> Schwerpunkt dieser Studie. Ermöglicht iterative Entwicklung, schnelle Anpassung an Änderungen und aktive Einbindung aller Projektbeteiligten.</li>
    </ul>

    <h3>2.1 Scrum</h3>
    <p>Scrum bietet einen flexiblen Rahmen für komplexe Produktentwicklungen ohne spezifische Vorgaben für die Entwicklungsphase. Kernideen sind iterative und inkrementelle Entwicklung zur Risikokontrolle und Erhöhung der Vorhersagbarkeit.</p>

    <h4>2.1.1 Allgemeine Konzepte im Scrum-Prozess</h4>
    <ul>
      <li><strong>Sprint:</strong> Wiederholende Entwicklungszyklen von 1–4 Wochen</li>
      <li><strong>Product Backlog:</strong> Liste aller Anforderungen und Features</li>
      <li><strong>Sprint Backlog:</strong> Aufgaben, die während eines Sprints umgesetzt werden</li>
      <li><strong>Sprint Burndown Chart:</strong> Visualisierung des Fortschritts während des Sprints</li>
      <li><strong>Sprint Goal:</strong> Ziel des aktuellen Sprints</li>
      <li><strong>User Stories:</strong> Anforderungen aus Sicht des Nutzers</li>
    </ul>

    <h4>2.1.2 Rollen im Scrum-Prozess</h4>
    <ul>
      <li><strong>Product Owner:</strong> Verantwortlich für Produktvision und Anforderungen</li>
      <li><strong>Entwicklungsteam:</strong> Softwareentwicklung, 3–15 Personen</li>
      <li><strong>Scrum Master:</strong> Unterstützung des Teams, Moderation, Problemlösung</li>
    </ul>

    <h4>2.1.3 Meetings im Scrum-Prozess</h4>
    <ul>
      <li><strong>Sprint Planning Meeting:</strong> Planung der Aufgaben im Sprint</li>
      <li><strong>Daily Scrum Meeting:</strong> Kurzes tägliches Meeting zur Synchronisation</li>
      <li><strong>Sprint Review Meeting:</strong> Präsentation der Ergebnisse und Feedback</li>
      <li><strong>Sprint Retrospective Meeting:</strong> Reflexion und Verbesserung des Prozesses</li>
    </ul>

    <h2>3. Material und Methode</h2>
    <p>Die mobile App bestand aus:</p>
    <ul>
      <li>Datenbank (MS SQL Server)</li>
      <li>Backend-Dienste (C#, ASP.NET)</li>
      <li>Mobile Anwendung (Android, Java, Eclipse)</li>
    </ul>
    <p>Prozessmanagement-Tools: OnTime Scrum Planning und MockUp Builder für Prototyping.</p>

    <h2>4. Implementierung von Scrum im mobilen Entwicklungsprozess</h2>
    <p>Der Prozess umfasste folgende Schritte:</p>
    <ol>
      <li>Scrum-Team gebildet (Product Owner, Scrum Master, Entwicklungsteam)</li>
      <li>Bedarfsanalyse und Product Backlog erstellt</li>
      <li>User Stories und erste Prototypen entwickelt</li>
      <li>Sprint Planning: Auswahl der User Stories für den Sprint, Erstellung des Sprint Backlogs</li>
      <li>Sprint Burndown Chart erstellt zur Fortschrittsverfolgung</li>
      <li>Sprint-Prozess gestartet, tägliche Scrum Meetings abgehalten</li>
      <li>Sprint Review und Retrospective Meetings durchgeführt</li>
      <li>Drei Sprints abgeschlossen, danach Markteinführung der App</li>
    </ol>

    <h3>4.1 Erstellung einer Product Backlog</h3>
    <ul>
      <li>Als Benutzer möchte ich beim Startbildschirm das Hochschullogo sehen.</li>
      <li>Als Benutzer möchte ich nach Anmeldung zwischen Kursen, Dozenten und Hinweisen wählen können.</li>
    </ul>

    <h3>4.2 Erstellung von Basic User Screen Prototypen</h3>
    <p>Prototypen erleichterten frühe Validierung und Feedbackintegration.</p>

    <h3>4.3–4.9 Sprint-Prozesse</h3>
    <p>Alle Sprints folgten dem gleichen Muster: Umsetzung der User Stories, tägliche Meetings, Überwachung durch Burndown Charts, Review und Retrospective Meetings, Feedbackintegration und Anpassungen.</p>

    <h3>4.10 Markteinführung der Produktion</h3>
    <p>Nach finalen Tests und Eingabe der Echt-Daten wurde die App im Google Play Market veröffentlicht.</p>

    <h2>5. Diskussion und Ergebnis</h2>
    <p>Scrum ermöglichte schnelle Anpassungen an Kundenwünsche, transparente Fortschrittskontrolle und eine schnelle Markteinführung. Persönliche Meetings waren effektiver als Remote-Meetings. Die Methode ist besonders geeignet für mobile App-Projekte, die schnell auf Marktbedürfnisse reagieren müssen.</p>

    <h2>Literaturverzeichnis</h2>
    <ol>
      <li>C. Scharff, R. Verma, “Scrum to support mobile application development projects in a just-in-time learning context”</li>
      <li>H.K. Flora, S.V. Chande, “A Review and Analysis on Mobile Application Development Processes Using Agile Methodologies”</li>
      <li>V. Rahimian, R. Ramsin, “Designing an Agile Methodology for Mobile Software Development: A Hybrid Method Engineering Approach”</li>
      <li>K. Beck et al., Manifesto for Agile Software Development, <a href="http://agilemanifesto.org/">http://agilemanifesto.org/</a></li>
      <li>M. Elibol, Ç.S. Erol, “Mobile Application Development With Agile Methodology”</li>
      <li>P. Abrahamsson et al., “Mobile-D: an agile approach for mobile application development”</li>
      <li>Y.J. Jeong, J.H. Lee, G.S. Shin, “Development Process of Mobile Application SW Based on Agile Methodology”</li>
      <li>J. Highsmith, Agile Software Development Ecosystems</li>
      <li>K. Schwaber, J. Sutherland, The Definitive Guide to Scrum: The Rules of the Game</li>
      <li>K. Vlaanderen et al., “The agile requirements refinery: Applying SCRUM principles to software product management”</li>
      <li>P. Abrahamsson et al., Agile Software Development Methods: Review and Analysis</li>
      <li>H. Kniberg, Scrum and XP from the Trenches, C4 Media Inc.</li>
      <li>P. Nicolas, Introduction to SCRUM Agile Process for Global Software Development</li>
      <li>K. Schwaber, Agile Project Management with Scrum</li>
      <li>M. Beedle et al., “SCRUM: An extension pattern language for hyperproductive software development”</li>
    </ol>

    <div style="margin-top:2rem;padding:1rem;background:#f0f9ff;border-radius:0.5rem;" class="tags-box">
      <p style="margin:0;color:#1e40af;"><strong style="color:#1e40af;">Tags:</strong> Scrum, Agile, Mobile App Development, Essay</p>
    </div>
  `,
  },
];

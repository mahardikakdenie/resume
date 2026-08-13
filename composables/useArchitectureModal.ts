import { ref, computed } from 'vue'

export interface ArchitectureNode {
  id: string
  name: string
  role: string
  technology: string
  status: 'healthy' | 'warning' | 'optimal'
  latencyMs: number
  description: string
  codeSnippet: string
  icon: string
}

export interface ArchitecturePreset {
  id: string
  title: string
  tagline: string
  nodes: ArchitectureNode[]
  baseRps: number
  p99Latency: number
  cacheHitRatio: number
}

const isOpen = ref(false)
const selectedPresetId = ref('microservices')
const activeNodeId = ref<string>('edge-gateway')
const currentRpsLoad = ref<number>(1000)

const presets: ArchitecturePreset[] = [
  {
    id: 'microservices',
    title: 'Distributed Microservices & AI Pipeline',
    tagline: 'High-throughput event-driven microservices with Redis Pub/Sub & AI Worker Nodes',
    baseRps: 15000,
    p99Latency: 14,
    cacheHitRatio: 94.2,
    nodes: [
      {
        id: 'edge-gateway',
        name: 'Cloudflare Edge CDN & WAF',
        role: 'Global Routing & DDoS Protection',
        technology: 'Cloudflare Workers / V8 Isolates',
        status: 'optimal',
        latencyMs: 3,
        description: 'Terminates SSL/TLS connections at 300+ edge locations, validating JWT tokens and filtering bad actors in under 5ms.',
        codeSnippet: `export default {
  async fetch(request, env): Promise<Response> {
    const clientIp = request.headers.get('cf-connecting-ip');
    const isAllowed = await env.RATE_LIMITER.limit({ key: clientIp });
    if (!isAllowed.success) {
      return new Response('Rate limit exceeded', { status: 429 });
    }
    return fetch(request);
  }
};`,
        icon: 'Globe'
      },
      {
        id: 'ssr-frontend',
        name: 'Nuxt 3 Edge SSR Renderer',
        role: 'Server-Side Rendering & Hydration',
        technology: 'Vue 3 / Nitro Engine / TypeScript',
        status: 'healthy',
        latencyMs: 12,
        description: 'Renders dynamic HTML streams with Route Rules caching, pushing payload hints directly to browser clients.',
        codeSnippet: `export default defineNuxtConfig({
  routeRules: {
    '/api/projects': { swr: 3600 },
    '/experiences/**': { static: true },
    '/admin/**': { ssr: false }
  }
});`,
        icon: 'Layout'
      },
      {
        id: 'api-gateway',
        name: 'NestJS REST & GraphQL Gateway',
        role: 'Microservice Router & Auth Validation',
        technology: 'Node.js / RxJS / Passport Guard',
        status: 'healthy',
        latencyMs: 18,
        description: 'Central API Gateway orchestrating RPC calls to downstream microservices with circuit breakers and fallback handlers.',
        codeSnippet: `@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    return this.validateSession(req.headers.authorization);
  }
}`,
        icon: 'Server'
      },
      {
        id: 'redis-cache',
        name: 'Redis L2 Distributed Cache',
        role: 'Sub-millisecond Session & Query Store',
        technology: 'Redis 7 / Cluster Mode',
        status: 'optimal',
        latencyMs: 1.8,
        description: 'Stores active candidate evaluation sessions, user tokens, and pre-computed database query results.',
        codeSnippet: `async function getCachedProfile(userId: string) {
  const cached = await redis.get(\`user:\${userId}\`);
  if (cached) return JSON.parse(cached);
  const dbData = await db.user.findUnique({ where: { id: userId } });
  await redis.set(\`user:\${userId}\`, JSON.stringify(dbData), 'EX', 3600);
  return dbData;
}`,
        icon: 'Zap'
      },
      {
        id: 'ai-worker',
        name: 'Async AI Inference Queue Worker',
        role: 'LLM Response Streaming & Vector Search',
        technology: 'Python FastAPI / Celery / Pinecone',
        status: 'healthy',
        latencyMs: 145,
        description: 'Processes asynchronous vector embeddings and streams LLM candidate evaluation insights over WebSockets.',
        codeSnippet: `@app.post("/api/v1/evaluate-candidate")
async def evaluate(candidate: CandidateSchema, background_tasks: BackgroundTasks):
    vector_score = await pinecone_index.query(candidate.embedding)
    background_tasks.add_task(log_analytics, candidate.id)
    return {"relevance_score": vector_score, "status": "processed"}`,
        icon: 'Cpu'
      }
    ]
  },
  {
    id: 'realtime-websocket',
    title: 'Realtime WebSocket & Notification Cluster',
    tagline: 'Low-latency bidirectional data sync & live metrics telemetry',
    baseRps: 45000,
    p99Latency: 6,
    cacheHitRatio: 98.9,
    nodes: [
      {
        id: 'ws-gateway',
        name: 'WebSocket Load Balancer',
        role: 'Socket Connection Termination',
        technology: 'HAProxy / uWebSockets',
        status: 'optimal',
        latencyMs: 2,
        description: 'Sustains over 100,000 concurrent persistent TCP/WS connections with ping-pong heartbeat health checks.',
        codeSnippet: `const app = uWS.App().ws('/*', {
  open: (ws) => ws.subscribe('global_feed'),
  message: (ws, message) => ws.publish('global_feed', message)
}).listen(9001, (token) => console.log('WS Running'));`,
        icon: 'Radio'
      },
      {
        id: 'pubsub-broker',
        name: 'NATS JetStream Event Broker',
        role: 'Decoupled Microservice Messaging',
        technology: 'NATS.io / Go Engine',
        status: 'healthy',
        latencyMs: 4,
        description: 'High-performance message pub/sub delivering event notifications across worker nodes with guaranteed delivery.',
        codeSnippet: `nc, _ := nats.Connect("nats://nats-cluster:4222")
js, _ := nc.JetStream()
js.Publish("TELEMETRY.METRICS", []byte("load_spike_detected"))`,
        icon: 'Layers'
      }
    ]
  },
  {
    id: 'multitenant-saas',
    title: 'Multi-Tenant Enterprise SaaS Architecture',
    tagline: 'Isolated tenant schematics with dynamic connection pooling & RLS security',
    baseRps: 28000,
    p99Latency: 11,
    cacheHitRatio: 96.5,
    nodes: [
      {
        id: 'tenant-router',
        name: 'Subdomain Tenant Resolver',
        role: 'Dynamic Tenant Routing',
        technology: 'Node.js Express Middleware',
        status: 'optimal',
        latencyMs: 2.5,
        description: 'Extracts request subdomains, verifies tenant active subscription tier, and attaches tenant Context DB connection pool.',
        codeSnippet: `export const tenantContext = (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'] || req.subdomains[0];
  req.dbPool = getTenantDatabasePool(tenantId);
  next();
};`,
        icon: 'Shield'
      },
      {
        id: 'rls-postgres',
        name: 'PostgreSQL Row-Level Security',
        role: 'Isolated Tenant Storage',
        technology: 'PostgreSQL 15 + Prisma RLS',
        status: 'healthy',
        latencyMs: 8.4,
        description: 'Enforces strictly isolated tenant data boundaries at the SQL engine level using Row-Level Security policies.',
        codeSnippet: `CREATE POLICY tenant_isolation_policy ON organization_data
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant_id'));`,
        icon: 'Database'
      }
    ]
  }
]

export function useArchitectureModal() {
  const openModal = () => {
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
  }

  const toggleModal = () => {
    isOpen.value = !isOpen.value
  }

  const currentPreset = computed(() => {
    return presets.find(p => p.id === selectedPresetId.value) || presets[0]
  })

  const currentNode = computed(() => {
    return currentPreset.value.nodes.find(n => n.id === activeNodeId.value) || currentPreset.value.nodes[0]
  })

  const simulatedMetrics = computed(() => {
    const loadMultiplier = currentRpsLoad.value / 1000
    const calculatedLatency = Math.round(currentPreset.value.p99Latency + (loadMultiplier * 1.5))
    const calculatedCache = Math.max(80, (currentPreset.value.cacheHitRatio - (loadMultiplier * 0.2))).toFixed(1)
    
    return {
      effectiveRps: (currentPreset.value.baseRps * (loadMultiplier * 0.8)).toLocaleString(),
      latencyMs: calculatedLatency,
      cacheHitRatio: calculatedCache,
      healthScore: calculatedLatency < 40 ? '100% Optimal' : '96% Stable'
    }
  })

  return {
    isOpen,
    presets,
    selectedPresetId,
    activeNodeId,
    currentRpsLoad,
    currentPreset,
    currentNode,
    simulatedMetrics,
    openModal,
    closeModal,
    toggleModal
  }
}

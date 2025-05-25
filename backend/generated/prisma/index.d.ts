
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model AvailabilitySlot
 * 
 */
export type AvailabilitySlot = $Result.DefaultSelection<Prisma.$AvailabilitySlotPayload>
/**
 * Model Invite
 * 
 */
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>
/**
 * Model UserAuth
 * 
 */
export type UserAuth = $Result.DefaultSelection<Prisma.$UserAuthPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  APPLE: 'APPLE'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const Status: {
  invited: 'invited',
  accepted: 'accepted',
  pending: 'pending'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySlot`: Exposes CRUD operations for the **AvailabilitySlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySlots
    * const availabilitySlots = await prisma.availabilitySlot.findMany()
    * ```
    */
  get availabilitySlot(): Prisma.AvailabilitySlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAuth`: Exposes CRUD operations for the **UserAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuths
    * const userAuths = await prisma.userAuth.findMany()
    * ```
    */
  get userAuth(): Prisma.UserAuthDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Contact: 'Contact',
    AvailabilitySlot: 'AvailabilitySlot',
    Invite: 'Invite',
    UserAuth: 'UserAuth'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "contact" | "availabilitySlot" | "invite" | "userAuth"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySlot: {
        payload: Prisma.$AvailabilitySlotPayload<ExtArgs>
        fields: Prisma.AvailabilitySlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilitySlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findFirst: {
            args: Prisma.AvailabilitySlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          findMany: {
            args: Prisma.AvailabilitySlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          create: {
            args: Prisma.AvailabilitySlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          createMany: {
            args: Prisma.AvailabilitySlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          delete: {
            args: Prisma.AvailabilitySlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          update: {
            args: Prisma.AvailabilitySlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilitySlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilitySlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilitySlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySlotPayload>
          }
          aggregate: {
            args: Prisma.AvailabilitySlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySlot>
          }
          groupBy: {
            args: Prisma.AvailabilitySlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilitySlotCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilitySlotCountAggregateOutputType> | number
          }
        }
      }
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      UserAuth: {
        payload: Prisma.$UserAuthPayload<ExtArgs>
        fields: Prisma.UserAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findFirst: {
            args: Prisma.UserAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findMany: {
            args: Prisma.UserAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          create: {
            args: Prisma.UserAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          createMany: {
            args: Prisma.UserAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          delete: {
            args: Prisma.UserAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          update: {
            args: Prisma.UserAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          upsert: {
            args: Prisma.UserAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          aggregate: {
            args: Prisma.UserAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuth>
          }
          groupBy: {
            args: Prisma.UserAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuthCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    contact?: ContactOmit
    availabilitySlot?: AvailabilitySlotOmit
    invite?: InviteOmit
    userAuth?: UserAuthOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contacts: number
    slots: number
    invitesSent: number
    invitesReceived: number
    authMethods: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
    slots?: boolean | UserCountOutputTypeCountSlotsArgs
    invitesSent?: boolean | UserCountOutputTypeCountInvitesSentArgs
    invitesReceived?: boolean | UserCountOutputTypeCountInvitesReceivedArgs
    authMethods?: boolean | UserCountOutputTypeCountAuthMethodsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    gender: $Enums.Gender | null
    phone: string | null
    date_of_birth: Date | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    gender: $Enums.Gender | null
    phone: string | null
    date_of_birth: Date | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    gender: number
    phone: number
    date_of_birth: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    gender?: true
    phone?: true
    date_of_birth?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    gender?: true
    phone?: true
    date_of_birth?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    gender?: true
    phone?: true
    date_of_birth?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    email: string
    gender: $Enums.Gender | null
    phone: string
    date_of_birth: Date | null
    password: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    date_of_birth?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    contacts?: boolean | User$contactsArgs<ExtArgs>
    slots?: boolean | User$slotsArgs<ExtArgs>
    invitesSent?: boolean | User$invitesSentArgs<ExtArgs>
    invitesReceived?: boolean | User$invitesReceivedArgs<ExtArgs>
    authMethods?: boolean | User$authMethodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    date_of_birth?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    date_of_birth?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    gender?: boolean
    phone?: boolean
    date_of_birth?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "gender" | "phone" | "date_of_birth" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | User$contactsArgs<ExtArgs>
    slots?: boolean | User$slotsArgs<ExtArgs>
    invitesSent?: boolean | User$invitesSentArgs<ExtArgs>
    invitesReceived?: boolean | User$invitesReceivedArgs<ExtArgs>
    authMethods?: boolean | User$authMethodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      slots: Prisma.$AvailabilitySlotPayload<ExtArgs>[]
      invitesSent: Prisma.$InvitePayload<ExtArgs>[]
      invitesReceived: Prisma.$InvitePayload<ExtArgs>[]
      authMethods: Prisma.$UserAuthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      email: string
      gender: $Enums.Gender | null
      phone: string
      date_of_birth: Date | null
      password: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slots<T extends User$slotsArgs<ExtArgs> = {}>(args?: Subset<T, User$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitesSent<T extends User$invitesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$invitesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitesReceived<T extends User$invitesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$invitesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authMethods<T extends User$authMethodsArgs<ExtArgs> = {}>(args?: Subset<T, User$authMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly phone: FieldRef<"User", 'String'>
    readonly date_of_birth: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * User.slots
   */
  export type User$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    cursor?: AvailabilitySlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * User.invitesSent
   */
  export type User$invitesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * User.invitesReceived
   */
  export type User$invitesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * User.authMethods
   */
  export type User$authMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    where?: UserAuthWhereInput
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    cursor?: UserAuthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    userId: number | null
    contact_name: string | null
    contact_phone: string | null
    status: $Enums.Status | null
    invited_at: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    contact_name: string | null
    contact_phone: string | null
    status: $Enums.Status | null
    invited_at: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    userId: number
    contact_name: number
    contact_phone: number
    status: number
    invited_at: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    userId?: true
    contact_name?: true
    contact_phone?: true
    status?: true
    invited_at?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    userId?: true
    contact_name?: true
    contact_phone?: true
    status?: true
    invited_at?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    userId?: true
    contact_name?: true
    contact_phone?: true
    status?: true
    invited_at?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    userId: number
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contact_name?: boolean
    contact_phone?: boolean
    status?: boolean
    invited_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contact_name?: boolean
    contact_phone?: boolean
    status?: boolean
    invited_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contact_name?: boolean
    contact_phone?: boolean
    status?: boolean
    invited_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    userId?: boolean
    contact_name?: boolean
    contact_phone?: boolean
    status?: boolean
    invited_at?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contact_name" | "contact_phone" | "status" | "invited_at", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      contact_name: string
      contact_phone: string
      status: $Enums.Status
      invited_at: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly userId: FieldRef<"Contact", 'Int'>
    readonly contact_name: FieldRef<"Contact", 'String'>
    readonly contact_phone: FieldRef<"Contact", 'String'>
    readonly status: FieldRef<"Contact", 'Status'>
    readonly invited_at: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySlot
   */

  export type AggregateAvailabilitySlot = {
    _count: AvailabilitySlotCountAggregateOutputType | null
    _avg: AvailabilitySlotAvgAggregateOutputType | null
    _sum: AvailabilitySlotSumAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  export type AvailabilitySlotAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvailabilitySlotSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvailabilitySlotMinAggregateOutputType = {
    id: number | null
    userId: number | null
    start_time: Date | null
    end_time: Date | null
    is_free: boolean | null
    label: string | null
  }

  export type AvailabilitySlotMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    start_time: Date | null
    end_time: Date | null
    is_free: boolean | null
    label: string | null
  }

  export type AvailabilitySlotCountAggregateOutputType = {
    id: number
    userId: number
    start_time: number
    end_time: number
    is_free: number
    label: number
    _all: number
  }


  export type AvailabilitySlotAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvailabilitySlotSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvailabilitySlotMinAggregateInputType = {
    id?: true
    userId?: true
    start_time?: true
    end_time?: true
    is_free?: true
    label?: true
  }

  export type AvailabilitySlotMaxAggregateInputType = {
    id?: true
    userId?: true
    start_time?: true
    end_time?: true
    is_free?: true
    label?: true
  }

  export type AvailabilitySlotCountAggregateInputType = {
    id?: true
    userId?: true
    start_time?: true
    end_time?: true
    is_free?: true
    label?: true
    _all?: true
  }

  export type AvailabilitySlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlot to aggregate.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySlots
    **/
    _count?: true | AvailabilitySlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilitySlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilitySlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type GetAvailabilitySlotAggregateType<T extends AvailabilitySlotAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
      : GetScalarType<T[P], AggregateAvailabilitySlot[P]>
  }




  export type AvailabilitySlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilitySlotWhereInput
    orderBy?: AvailabilitySlotOrderByWithAggregationInput | AvailabilitySlotOrderByWithAggregationInput[]
    by: AvailabilitySlotScalarFieldEnum[] | AvailabilitySlotScalarFieldEnum
    having?: AvailabilitySlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilitySlotCountAggregateInputType | true
    _avg?: AvailabilitySlotAvgAggregateInputType
    _sum?: AvailabilitySlotSumAggregateInputType
    _min?: AvailabilitySlotMinAggregateInputType
    _max?: AvailabilitySlotMaxAggregateInputType
  }

  export type AvailabilitySlotGroupByOutputType = {
    id: number
    userId: number
    start_time: Date
    end_time: Date
    is_free: boolean
    label: string | null
    _count: AvailabilitySlotCountAggregateOutputType | null
    _avg: AvailabilitySlotAvgAggregateOutputType | null
    _sum: AvailabilitySlotSumAggregateOutputType | null
    _min: AvailabilitySlotMinAggregateOutputType | null
    _max: AvailabilitySlotMaxAggregateOutputType | null
  }

  type GetAvailabilitySlotGroupByPayload<T extends AvailabilitySlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilitySlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilitySlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilitySlotGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    start_time?: boolean
    end_time?: boolean
    is_free?: boolean
    label?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    start_time?: boolean
    end_time?: boolean
    is_free?: boolean
    label?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    start_time?: boolean
    end_time?: boolean
    is_free?: boolean
    label?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySlot"]>

  export type AvailabilitySlotSelectScalar = {
    id?: boolean
    userId?: boolean
    start_time?: boolean
    end_time?: boolean
    is_free?: boolean
    label?: boolean
  }

  export type AvailabilitySlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "start_time" | "end_time" | "is_free" | "label", ExtArgs["result"]["availabilitySlot"]>
  export type AvailabilitySlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySlot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      start_time: Date
      end_time: Date
      is_free: boolean
      label: string | null
    }, ExtArgs["result"]["availabilitySlot"]>
    composites: {}
  }

  type AvailabilitySlotGetPayload<S extends boolean | null | undefined | AvailabilitySlotDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySlotPayload, S>

  type AvailabilitySlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilitySlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilitySlotCountAggregateInputType | true
    }

  export interface AvailabilitySlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySlot'], meta: { name: 'AvailabilitySlot' } }
    /**
     * Find zero or one AvailabilitySlot that matches the filter.
     * @param {AvailabilitySlotFindUniqueArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilitySlotFindUniqueArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilitySlotFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilitySlotFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilitySlotFindFirstArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySlot
     * @example
     * // Get one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilitySlotFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilitySlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany()
     * 
     * // Get first 10 AvailabilitySlots
     * const availabilitySlots = await prisma.availabilitySlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilitySlotFindManyArgs>(args?: SelectSubset<T, AvailabilitySlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySlot.
     * @param {AvailabilitySlotCreateArgs} args - Arguments to create a AvailabilitySlot.
     * @example
     * // Create one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.create({
     *   data: {
     *     // ... data to create a AvailabilitySlot
     *   }
     * })
     * 
     */
    create<T extends AvailabilitySlotCreateArgs>(args: SelectSubset<T, AvailabilitySlotCreateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySlots.
     * @param {AvailabilitySlotCreateManyArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilitySlotCreateManyArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySlots and returns the data saved in the database.
     * @param {AvailabilitySlotCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySlots.
     * @example
     * // Create many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilitySlotCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilitySlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySlot.
     * @param {AvailabilitySlotDeleteArgs} args - Arguments to delete one AvailabilitySlot.
     * @example
     * // Delete one AvailabilitySlot
     * const AvailabilitySlot = await prisma.availabilitySlot.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySlot
     *   }
     * })
     * 
     */
    delete<T extends AvailabilitySlotDeleteArgs>(args: SelectSubset<T, AvailabilitySlotDeleteArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySlot.
     * @param {AvailabilitySlotUpdateArgs} args - Arguments to update one AvailabilitySlot.
     * @example
     * // Update one AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilitySlotUpdateArgs>(args: SelectSubset<T, AvailabilitySlotUpdateArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySlots.
     * @param {AvailabilitySlotDeleteManyArgs} args - Arguments to filter AvailabilitySlots to delete.
     * @example
     * // Delete a few AvailabilitySlots
     * const { count } = await prisma.availabilitySlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilitySlotDeleteManyArgs>(args?: SelectSubset<T, AvailabilitySlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilitySlotUpdateManyArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySlots and returns the data updated in the database.
     * @param {AvailabilitySlotUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySlots.
     * @example
     * // Update many AvailabilitySlots
     * const availabilitySlot = await prisma.availabilitySlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySlots and only return the `id`
     * const availabilitySlotWithIdOnly = await prisma.availabilitySlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilitySlotUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySlot.
     * @param {AvailabilitySlotUpsertArgs} args - Arguments to update or create a AvailabilitySlot.
     * @example
     * // Update or create a AvailabilitySlot
     * const availabilitySlot = await prisma.availabilitySlot.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySlot we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilitySlotUpsertArgs>(args: SelectSubset<T, AvailabilitySlotUpsertArgs<ExtArgs>>): Prisma__AvailabilitySlotClient<$Result.GetResult<Prisma.$AvailabilitySlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotCountArgs} args - Arguments to filter AvailabilitySlots to count.
     * @example
     * // Count the number of AvailabilitySlots
     * const count = await prisma.availabilitySlot.count({
     *   where: {
     *     // ... the filter for the AvailabilitySlots we want to count
     *   }
     * })
    **/
    count<T extends AvailabilitySlotCountArgs>(
      args?: Subset<T, AvailabilitySlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilitySlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilitySlotAggregateArgs>(args: Subset<T, AvailabilitySlotAggregateArgs>): Prisma.PrismaPromise<GetAvailabilitySlotAggregateType<T>>

    /**
     * Group by AvailabilitySlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilitySlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilitySlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilitySlotGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilitySlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilitySlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilitySlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySlot model
   */
  readonly fields: AvailabilitySlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilitySlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailabilitySlot model
   */
  interface AvailabilitySlotFieldRefs {
    readonly id: FieldRef<"AvailabilitySlot", 'Int'>
    readonly userId: FieldRef<"AvailabilitySlot", 'Int'>
    readonly start_time: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly end_time: FieldRef<"AvailabilitySlot", 'DateTime'>
    readonly is_free: FieldRef<"AvailabilitySlot", 'Boolean'>
    readonly label: FieldRef<"AvailabilitySlot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySlot findUnique
   */
  export type AvailabilitySlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findUniqueOrThrow
   */
  export type AvailabilitySlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot findFirst
   */
  export type AvailabilitySlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findFirstOrThrow
   */
  export type AvailabilitySlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlot to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySlots.
     */
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot findMany
   */
  export type AvailabilitySlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySlots to fetch.
     */
    where?: AvailabilitySlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySlots to fetch.
     */
    orderBy?: AvailabilitySlotOrderByWithRelationInput | AvailabilitySlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySlots.
     */
    cursor?: AvailabilitySlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySlots.
     */
    skip?: number
    distinct?: AvailabilitySlotScalarFieldEnum | AvailabilitySlotScalarFieldEnum[]
  }

  /**
   * AvailabilitySlot create
   */
  export type AvailabilitySlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
  }

  /**
   * AvailabilitySlot createMany
   */
  export type AvailabilitySlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySlot createManyAndReturn
   */
  export type AvailabilitySlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySlots.
     */
    data: AvailabilitySlotCreateManyInput | AvailabilitySlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot update
   */
  export type AvailabilitySlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySlot.
     */
    data: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySlot to update.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot updateMany
   */
  export type AvailabilitySlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot updateManyAndReturn
   */
  export type AvailabilitySlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySlots.
     */
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySlots to update
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySlot upsert
   */
  export type AvailabilitySlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySlot to update in case it exists.
     */
    where: AvailabilitySlotWhereUniqueInput
    /**
     * In case the AvailabilitySlot found by the `where` argument doesn't exist, create a new AvailabilitySlot with this data.
     */
    create: XOR<AvailabilitySlotCreateInput, AvailabilitySlotUncheckedCreateInput>
    /**
     * In case the AvailabilitySlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilitySlotUpdateInput, AvailabilitySlotUncheckedUpdateInput>
  }

  /**
   * AvailabilitySlot delete
   */
  export type AvailabilitySlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySlot to delete.
     */
    where: AvailabilitySlotWhereUniqueInput
  }

  /**
   * AvailabilitySlot deleteMany
   */
  export type AvailabilitySlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySlots to delete
     */
    where?: AvailabilitySlotWhereInput
    /**
     * Limit how many AvailabilitySlots to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySlot without action
   */
  export type AvailabilitySlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySlot
     */
    select?: AvailabilitySlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySlot
     */
    omit?: AvailabilitySlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilitySlotInclude<ExtArgs> | null
  }


  /**
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteAvgAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
  }

  export type InviteSumAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
  }

  export type InviteMinAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
    invitee_phone: string | null
    send_at: Date | null
    accepted_at: Date | null
  }

  export type InviteMaxAggregateOutputType = {
    id: number | null
    inviterId: number | null
    inviteeId: number | null
    invitee_phone: string | null
    send_at: Date | null
    accepted_at: Date | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    inviterId: number
    inviteeId: number
    invitee_phone: number
    send_at: number
    accepted_at: number
    _all: number
  }


  export type InviteAvgAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
  }

  export type InviteSumAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
  }

  export type InviteMinAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    invitee_phone?: true
    send_at?: true
    accepted_at?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    invitee_phone?: true
    send_at?: true
    accepted_at?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    invitee_phone?: true
    send_at?: true
    accepted_at?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _avg?: InviteAvgAggregateInputType
    _sum?: InviteSumAggregateInputType
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: number
    inviterId: number
    inviteeId: number | null
    invitee_phone: string
    send_at: Date
    accepted_at: Date | null
    _count: InviteCountAggregateOutputType | null
    _avg: InviteAvgAggregateOutputType | null
    _sum: InviteSumAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    invitee_phone?: boolean
    send_at?: boolean
    accepted_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    invitee_phone?: boolean
    send_at?: boolean
    accepted_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    invitee_phone?: boolean
    send_at?: boolean
    accepted_at?: boolean
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectScalar = {
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    invitee_phone?: boolean
    send_at?: boolean
    accepted_at?: boolean
  }

  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviterId" | "inviteeId" | "invitee_phone" | "send_at" | "accepted_at", ExtArgs["result"]["invite"]>
  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }
  export type InviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }
  export type InviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }

  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      inviter: Prisma.$UserPayload<ExtArgs>
      invitee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviterId: number
      inviteeId: number | null
      invitee_phone: string
      send_at: Date
      accepted_at: Date | null
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }

  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>

  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteFindUniqueArgs>(args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteFindFirstArgs>(args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteFindManyArgs>(args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
     */
    create<T extends InviteCreateArgs>(args: SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCreateManyArgs>(args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InviteCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
     */
    delete<T extends InviteDeleteArgs>(args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteUpdateArgs>(args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteDeleteManyArgs>(args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteUpdateManyArgs>(args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {InviteUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InviteUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends InviteUpsertArgs>(args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invite model
   */
  readonly fields: InviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitee<T extends Invite$inviteeArgs<ExtArgs> = {}>(args?: Subset<T, Invite$inviteeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invite model
   */
  interface InviteFieldRefs {
    readonly id: FieldRef<"Invite", 'Int'>
    readonly inviterId: FieldRef<"Invite", 'Int'>
    readonly inviteeId: FieldRef<"Invite", 'Int'>
    readonly invitee_phone: FieldRef<"Invite", 'String'>
    readonly send_at: FieldRef<"Invite", 'DateTime'>
    readonly accepted_at: FieldRef<"Invite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findUniqueOrThrow
   */
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findFirstOrThrow
   */
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findMany
   */
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite create
   */
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Invite.
     */
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }

  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invite createManyAndReturn
   */
  export type InviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite update
   */
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Invite.
     */
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
  }

  /**
   * Invite updateManyAndReturn
   */
  export type InviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite upsert
   */
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }

  /**
   * Invite delete
   */
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter which Invite to delete.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to delete.
     */
    limit?: number
  }

  /**
   * Invite.invitee
   */
  export type Invite$inviteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invite without action
   */
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
  }


  /**
   * Model UserAuth
   */

  export type AggregateUserAuth = {
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  export type UserAuthAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAuthSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAuthMinAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAuthMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserAuthCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerId: number
    accessToken: number
    refreshToken: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAuthAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAuthSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAuthMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAuthMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    created_at?: true
    updated_at?: true
  }

  export type UserAuthCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuth to aggregate.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuths
    **/
    _count?: true | UserAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthMaxAggregateInputType
  }

  export type GetUserAuthAggregateType<T extends UserAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuth[P]>
      : GetScalarType<T[P], AggregateUserAuth[P]>
  }




  export type UserAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthWhereInput
    orderBy?: UserAuthOrderByWithAggregationInput | UserAuthOrderByWithAggregationInput[]
    by: UserAuthScalarFieldEnum[] | UserAuthScalarFieldEnum
    having?: UserAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthCountAggregateInputType | true
    _avg?: UserAuthAvgAggregateInputType
    _sum?: UserAuthSumAggregateInputType
    _min?: UserAuthMinAggregateInputType
    _max?: UserAuthMaxAggregateInputType
  }

  export type UserAuthGroupByOutputType = {
    id: number
    userId: number
    provider: $Enums.AuthProvider
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    created_at: Date
    updated_at: Date
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  type GetUserAuthGroupByPayload<T extends UserAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>

  export type UserAuthSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerId" | "accessToken" | "refreshToken" | "created_at" | "updated_at", ExtArgs["result"]["userAuth"]>
  export type UserAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      provider: $Enums.AuthProvider
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userAuth"]>
    composites: {}
  }

  type UserAuthGetPayload<S extends boolean | null | undefined | UserAuthDefaultArgs> = $Result.GetResult<Prisma.$UserAuthPayload, S>

  type UserAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAuthCountAggregateInputType | true
    }

  export interface UserAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuth'], meta: { name: 'UserAuth' } }
    /**
     * Find zero or one UserAuth that matches the filter.
     * @param {UserAuthFindUniqueArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuthFindUniqueArgs>(args: SelectSubset<T, UserAuthFindUniqueArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAuthFindUniqueOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuthFindFirstArgs>(args?: SelectSubset<T, UserAuthFindFirstArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuths
     * const userAuths = await prisma.userAuth.findMany()
     * 
     * // Get first 10 UserAuths
     * const userAuths = await prisma.userAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAuthFindManyArgs>(args?: SelectSubset<T, UserAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAuth.
     * @param {UserAuthCreateArgs} args - Arguments to create a UserAuth.
     * @example
     * // Create one UserAuth
     * const UserAuth = await prisma.userAuth.create({
     *   data: {
     *     // ... data to create a UserAuth
     *   }
     * })
     * 
     */
    create<T extends UserAuthCreateArgs>(args: SelectSubset<T, UserAuthCreateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAuths.
     * @param {UserAuthCreateManyArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuthCreateManyArgs>(args?: SelectSubset<T, UserAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAuths and returns the data saved in the database.
     * @param {UserAuthCreateManyAndReturnArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAuth.
     * @param {UserAuthDeleteArgs} args - Arguments to delete one UserAuth.
     * @example
     * // Delete one UserAuth
     * const UserAuth = await prisma.userAuth.delete({
     *   where: {
     *     // ... filter to delete one UserAuth
     *   }
     * })
     * 
     */
    delete<T extends UserAuthDeleteArgs>(args: SelectSubset<T, UserAuthDeleteArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAuth.
     * @param {UserAuthUpdateArgs} args - Arguments to update one UserAuth.
     * @example
     * // Update one UserAuth
     * const userAuth = await prisma.userAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuthUpdateArgs>(args: SelectSubset<T, UserAuthUpdateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAuths.
     * @param {UserAuthDeleteManyArgs} args - Arguments to filter UserAuths to delete.
     * @example
     * // Delete a few UserAuths
     * const { count } = await prisma.userAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuthDeleteManyArgs>(args?: SelectSubset<T, UserAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuthUpdateManyArgs>(args: SelectSubset<T, UserAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths and returns the data updated in the database.
     * @param {UserAuthUpdateManyAndReturnArgs} args - Arguments to update many UserAuths.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAuths and only return the `id`
     * const userAuthWithIdOnly = await prisma.userAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAuth.
     * @param {UserAuthUpsertArgs} args - Arguments to update or create a UserAuth.
     * @example
     * // Update or create a UserAuth
     * const userAuth = await prisma.userAuth.upsert({
     *   create: {
     *     // ... data to create a UserAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuth we want to update
     *   }
     * })
     */
    upsert<T extends UserAuthUpsertArgs>(args: SelectSubset<T, UserAuthUpsertArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthCountArgs} args - Arguments to filter UserAuths to count.
     * @example
     * // Count the number of UserAuths
     * const count = await prisma.userAuth.count({
     *   where: {
     *     // ... the filter for the UserAuths we want to count
     *   }
     * })
    **/
    count<T extends UserAuthCountArgs>(
      args?: Subset<T, UserAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAuthAggregateArgs>(args: Subset<T, UserAuthAggregateArgs>): Prisma.PrismaPromise<GetUserAuthAggregateType<T>>

    /**
     * Group by UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuth model
   */
  readonly fields: UserAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAuth model
   */
  interface UserAuthFieldRefs {
    readonly id: FieldRef<"UserAuth", 'Int'>
    readonly userId: FieldRef<"UserAuth", 'Int'>
    readonly provider: FieldRef<"UserAuth", 'AuthProvider'>
    readonly providerId: FieldRef<"UserAuth", 'String'>
    readonly accessToken: FieldRef<"UserAuth", 'String'>
    readonly refreshToken: FieldRef<"UserAuth", 'String'>
    readonly created_at: FieldRef<"UserAuth", 'DateTime'>
    readonly updated_at: FieldRef<"UserAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAuth findUnique
   */
  export type UserAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findUniqueOrThrow
   */
  export type UserAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findFirst
   */
  export type UserAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findFirstOrThrow
   */
  export type UserAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findMany
   */
  export type UserAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuths to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth create
   */
  export type UserAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuth.
     */
    data: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
  }

  /**
   * UserAuth createMany
   */
  export type UserAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuth createManyAndReturn
   */
  export type UserAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuth update
   */
  export type UserAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuth.
     */
    data: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
    /**
     * Choose, which UserAuth to update.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth updateMany
   */
  export type UserAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
  }

  /**
   * UserAuth updateManyAndReturn
   */
  export type UserAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAuth upsert
   */
  export type UserAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuth to update in case it exists.
     */
    where: UserAuthWhereUniqueInput
    /**
     * In case the UserAuth found by the `where` argument doesn't exist, create a new UserAuth with this data.
     */
    create: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
    /**
     * In case the UserAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
  }

  /**
   * UserAuth delete
   */
  export type UserAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter which UserAuth to delete.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth deleteMany
   */
  export type UserAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuths to delete
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to delete.
     */
    limit?: number
  }

  /**
   * UserAuth without action
   */
  export type UserAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    gender: 'gender',
    phone: 'phone',
    date_of_birth: 'date_of_birth',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contact_name: 'contact_name',
    contact_phone: 'contact_phone',
    status: 'status',
    invited_at: 'invited_at'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const AvailabilitySlotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    start_time: 'start_time',
    end_time: 'end_time',
    is_free: 'is_free',
    label: 'label'
  };

  export type AvailabilitySlotScalarFieldEnum = (typeof AvailabilitySlotScalarFieldEnum)[keyof typeof AvailabilitySlotScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    inviterId: 'inviterId',
    inviteeId: 'inviteeId',
    invitee_phone: 'invitee_phone',
    send_at: 'send_at',
    accepted_at: 'accepted_at'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const UserAuthScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserAuthScalarFieldEnum = (typeof UserAuthScalarFieldEnum)[keyof typeof UserAuthScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    phone?: StringFilter<"User"> | string
    date_of_birth?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    contacts?: ContactListRelationFilter
    slots?: AvailabilitySlotListRelationFilter
    invitesSent?: InviteListRelationFilter
    invitesReceived?: InviteListRelationFilter
    authMethods?: UserAuthListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    contacts?: ContactOrderByRelationAggregateInput
    slots?: AvailabilitySlotOrderByRelationAggregateInput
    invitesSent?: InviteOrderByRelationAggregateInput
    invitesReceived?: InviteOrderByRelationAggregateInput
    authMethods?: UserAuthOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    date_of_birth?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    contacts?: ContactListRelationFilter
    slots?: AvailabilitySlotListRelationFilter
    invitesSent?: InviteListRelationFilter
    invitesReceived?: InviteListRelationFilter
    authMethods?: UserAuthListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    gender?: SortOrderInput | SortOrder
    phone?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    phone?: StringWithAggregatesFilter<"User"> | string
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    userId?: IntFilter<"Contact"> | number
    contact_name?: StringFilter<"Contact"> | string
    contact_phone?: StringFilter<"Contact"> | string
    status?: EnumStatusFilter<"Contact"> | $Enums.Status
    invited_at?: DateTimeFilter<"Contact"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contact_name?: SortOrder
    contact_phone?: SortOrder
    status?: SortOrder
    invited_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    userId?: IntFilter<"Contact"> | number
    contact_name?: StringFilter<"Contact"> | string
    contact_phone?: StringFilter<"Contact"> | string
    status?: EnumStatusFilter<"Contact"> | $Enums.Status
    invited_at?: DateTimeFilter<"Contact"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contact_name?: SortOrder
    contact_phone?: SortOrder
    status?: SortOrder
    invited_at?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    userId?: IntWithAggregatesFilter<"Contact"> | number
    contact_name?: StringWithAggregatesFilter<"Contact"> | string
    contact_phone?: StringWithAggregatesFilter<"Contact"> | string
    status?: EnumStatusWithAggregatesFilter<"Contact"> | $Enums.Status
    invited_at?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type AvailabilitySlotWhereInput = {
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    id?: IntFilter<"AvailabilitySlot"> | number
    userId?: IntFilter<"AvailabilitySlot"> | number
    start_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    end_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    is_free?: BoolFilter<"AvailabilitySlot"> | boolean
    label?: StringNullableFilter<"AvailabilitySlot"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvailabilitySlotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_free?: SortOrder
    label?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvailabilitySlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_start_time_end_time?: AvailabilitySlotUserIdStart_timeEnd_timeCompoundUniqueInput
    AND?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    OR?: AvailabilitySlotWhereInput[]
    NOT?: AvailabilitySlotWhereInput | AvailabilitySlotWhereInput[]
    userId?: IntFilter<"AvailabilitySlot"> | number
    start_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    end_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    is_free?: BoolFilter<"AvailabilitySlot"> | boolean
    label?: StringNullableFilter<"AvailabilitySlot"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_start_time_end_time">

  export type AvailabilitySlotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_free?: SortOrder
    label?: SortOrderInput | SortOrder
    _count?: AvailabilitySlotCountOrderByAggregateInput
    _avg?: AvailabilitySlotAvgOrderByAggregateInput
    _max?: AvailabilitySlotMaxOrderByAggregateInput
    _min?: AvailabilitySlotMinOrderByAggregateInput
    _sum?: AvailabilitySlotSumOrderByAggregateInput
  }

  export type AvailabilitySlotScalarWhereWithAggregatesInput = {
    AND?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    OR?: AvailabilitySlotScalarWhereWithAggregatesInput[]
    NOT?: AvailabilitySlotScalarWhereWithAggregatesInput | AvailabilitySlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AvailabilitySlot"> | number
    userId?: IntWithAggregatesFilter<"AvailabilitySlot"> | number
    start_time?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"AvailabilitySlot"> | Date | string
    is_free?: BoolWithAggregatesFilter<"AvailabilitySlot"> | boolean
    label?: StringNullableWithAggregatesFilter<"AvailabilitySlot"> | string | null
  }

  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    id?: IntFilter<"Invite"> | number
    inviterId?: IntFilter<"Invite"> | number
    inviteeId?: IntNullableFilter<"Invite"> | number | null
    invitee_phone?: StringFilter<"Invite"> | string
    send_at?: DateTimeFilter<"Invite"> | Date | string
    accepted_at?: DateTimeNullableFilter<"Invite"> | Date | string | null
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InviteOrderByWithRelationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrderInput | SortOrder
    invitee_phone?: SortOrder
    send_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    inviter?: UserOrderByWithRelationInput
    invitee?: UserOrderByWithRelationInput
  }

  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    inviterId_invitee_phone?: InviteInviterIdInvitee_phoneCompoundUniqueInput
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    inviterId?: IntFilter<"Invite"> | number
    inviteeId?: IntNullableFilter<"Invite"> | number | null
    invitee_phone?: StringFilter<"Invite"> | string
    send_at?: DateTimeFilter<"Invite"> | Date | string
    accepted_at?: DateTimeNullableFilter<"Invite"> | Date | string | null
    inviter?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "inviterId_invitee_phone">

  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrderInput | SortOrder
    invitee_phone?: SortOrder
    send_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    _count?: InviteCountOrderByAggregateInput
    _avg?: InviteAvgOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
    _sum?: InviteSumOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invite"> | number
    inviterId?: IntWithAggregatesFilter<"Invite"> | number
    inviteeId?: IntNullableWithAggregatesFilter<"Invite"> | number | null
    invitee_phone?: StringWithAggregatesFilter<"Invite"> | string
    send_at?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    accepted_at?: DateTimeNullableWithAggregatesFilter<"Invite"> | Date | string | null
  }

  export type UserAuthWhereInput = {
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    id?: IntFilter<"UserAuth"> | number
    userId?: IntFilter<"UserAuth"> | number
    provider?: EnumAuthProviderFilter<"UserAuth"> | $Enums.AuthProvider
    providerId?: StringFilter<"UserAuth"> | string
    accessToken?: StringNullableFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableFilter<"UserAuth"> | string | null
    created_at?: DateTimeFilter<"UserAuth"> | Date | string
    updated_at?: DateTimeFilter<"UserAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAuthOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerId?: UserAuthProviderProviderIdCompoundUniqueInput
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    userId?: IntFilter<"UserAuth"> | number
    provider?: EnumAuthProviderFilter<"UserAuth"> | $Enums.AuthProvider
    providerId?: StringFilter<"UserAuth"> | string
    accessToken?: StringNullableFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableFilter<"UserAuth"> | string | null
    created_at?: DateTimeFilter<"UserAuth"> | Date | string
    updated_at?: DateTimeFilter<"UserAuth"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerId">

  export type UserAuthOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserAuthCountOrderByAggregateInput
    _avg?: UserAuthAvgOrderByAggregateInput
    _max?: UserAuthMaxOrderByAggregateInput
    _min?: UserAuthMinOrderByAggregateInput
    _sum?: UserAuthSumOrderByAggregateInput
  }

  export type UserAuthScalarWhereWithAggregatesInput = {
    AND?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    OR?: UserAuthScalarWhereWithAggregatesInput[]
    NOT?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAuth"> | number
    userId?: IntWithAggregatesFilter<"UserAuth"> | number
    provider?: EnumAuthProviderWithAggregatesFilter<"UserAuth"> | $Enums.AuthProvider
    providerId?: StringWithAggregatesFilter<"UserAuth"> | string
    accessToken?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"UserAuth"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotCreateNestedManyWithoutUserInput
    invitesSent?: InviteCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput
    invitesSent?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
    user: UserCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    userId: number
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
  }

  export type ContactUpdateInput = {
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    userId: number
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotCreateInput = {
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
    user: UserCreateNestedOneWithoutSlotsInput
  }

  export type AvailabilitySlotUncheckedCreateInput = {
    id?: number
    userId: number
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
  }

  export type AvailabilitySlotUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type AvailabilitySlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilitySlotCreateManyInput = {
    id?: number
    userId: number
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
  }

  export type AvailabilitySlotUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilitySlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InviteCreateInput = {
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
    inviter: UserCreateNestedOneWithoutInvitesSentInput
    invitee?: UserCreateNestedOneWithoutInvitesReceivedInput
  }

  export type InviteUncheckedCreateInput = {
    id?: number
    inviterId: number
    inviteeId?: number | null
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type InviteUpdateInput = {
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inviter?: UserUpdateOneRequiredWithoutInvitesSentNestedInput
    invitee?: UserUpdateOneWithoutInvitesReceivedNestedInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    inviteeId?: NullableIntFieldUpdateOperationsInput | number | null
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCreateManyInput = {
    id?: number
    inviterId: number
    inviteeId?: number | null
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type InviteUpdateManyMutationInput = {
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    inviteeId?: NullableIntFieldUpdateOperationsInput | number | null
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAuthCreateInput = {
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutAuthMethodsInput
  }

  export type UserAuthUncheckedCreateInput = {
    id?: number
    userId: number
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAuthUpdateInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthMethodsNestedInput
  }

  export type UserAuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthCreateManyInput = {
    id?: number
    userId: number
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAuthUpdateManyMutationInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type AvailabilitySlotListRelationFilter = {
    every?: AvailabilitySlotWhereInput
    some?: AvailabilitySlotWhereInput
    none?: AvailabilitySlotWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type UserAuthListRelationFilter = {
    every?: UserAuthWhereInput
    some?: UserAuthWhereInput
    none?: UserAuthWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilitySlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAuthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    date_of_birth?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    date_of_birth?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    date_of_birth?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contact_name?: SortOrder
    contact_phone?: SortOrder
    status?: SortOrder
    invited_at?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contact_name?: SortOrder
    contact_phone?: SortOrder
    status?: SortOrder
    invited_at?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contact_name?: SortOrder
    contact_phone?: SortOrder
    status?: SortOrder
    invited_at?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AvailabilitySlotUserIdStart_timeEnd_timeCompoundUniqueInput = {
    userId: number
    start_time: Date | string
    end_time: Date | string
  }

  export type AvailabilitySlotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_free?: SortOrder
    label?: SortOrder
  }

  export type AvailabilitySlotAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AvailabilitySlotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_free?: SortOrder
    label?: SortOrder
  }

  export type AvailabilitySlotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_free?: SortOrder
    label?: SortOrder
  }

  export type AvailabilitySlotSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InviteInviterIdInvitee_phoneCompoundUniqueInput = {
    inviterId: number
    invitee_phone: string
  }

  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    invitee_phone?: SortOrder
    send_at?: SortOrder
    accepted_at?: SortOrder
  }

  export type InviteAvgOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    invitee_phone?: SortOrder
    send_at?: SortOrder
    accepted_at?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    invitee_phone?: SortOrder
    send_at?: SortOrder
    accepted_at?: SortOrder
  }

  export type InviteSumOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type UserAuthProviderProviderIdCompoundUniqueInput = {
    provider: $Enums.AuthProvider
    providerId: string
  }

  export type UserAuthCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAuthAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAuthMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAuthSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AvailabilitySlotCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput> | AvailabilitySlotCreateWithoutUserInput[] | AvailabilitySlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutUserInput | AvailabilitySlotCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilitySlotCreateManyUserInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInviterInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserAuthCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput> | UserAuthCreateWithoutUserInput[] | UserAuthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput | UserAuthCreateOrConnectWithoutUserInput[]
    createMany?: UserAuthCreateManyUserInputEnvelope
    connect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput> | AvailabilitySlotCreateWithoutUserInput[] | AvailabilitySlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutUserInput | AvailabilitySlotCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilitySlotCreateManyUserInputEnvelope
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type UserAuthUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput> | UserAuthCreateWithoutUserInput[] | UserAuthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput | UserAuthCreateOrConnectWithoutUserInput[]
    createMany?: UserAuthCreateManyUserInputEnvelope
    connect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AvailabilitySlotUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput> | AvailabilitySlotCreateWithoutUserInput[] | AvailabilitySlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutUserInput | AvailabilitySlotCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutUserInput | AvailabilitySlotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilitySlotCreateManyUserInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutUserInput | AvailabilitySlotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutUserInput | AvailabilitySlotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviterInput | InviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviterInput | InviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviterInput | InviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviteeInput | InviteUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviteeInput | InviteUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviteeInput | InviteUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserAuthUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput> | UserAuthCreateWithoutUserInput[] | UserAuthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput | UserAuthCreateOrConnectWithoutUserInput[]
    upsert?: UserAuthUpsertWithWhereUniqueWithoutUserInput | UserAuthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAuthCreateManyUserInputEnvelope
    set?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    disconnect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    delete?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    connect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    update?: UserAuthUpdateWithWhereUniqueWithoutUserInput | UserAuthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAuthUpdateManyWithWhereWithoutUserInput | UserAuthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAuthScalarWhereInput | UserAuthScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput> | AvailabilitySlotCreateWithoutUserInput[] | AvailabilitySlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilitySlotCreateOrConnectWithoutUserInput | AvailabilitySlotCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilitySlotUpsertWithWhereUniqueWithoutUserInput | AvailabilitySlotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilitySlotCreateManyUserInputEnvelope
    set?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    disconnect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    delete?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    connect?: AvailabilitySlotWhereUniqueInput | AvailabilitySlotWhereUniqueInput[]
    update?: AvailabilitySlotUpdateWithWhereUniqueWithoutUserInput | AvailabilitySlotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilitySlotUpdateManyWithWhereWithoutUserInput | AvailabilitySlotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviterInput | InviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviterInput | InviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviterInput | InviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviteeInput | InviteUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviteeInput | InviteUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviteeInput | InviteUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type UserAuthUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput> | UserAuthCreateWithoutUserInput[] | UserAuthUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput | UserAuthCreateOrConnectWithoutUserInput[]
    upsert?: UserAuthUpsertWithWhereUniqueWithoutUserInput | UserAuthUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAuthCreateManyUserInputEnvelope
    set?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    disconnect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    delete?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    connect?: UserAuthWhereUniqueInput | UserAuthWhereUniqueInput[]
    update?: UserAuthUpdateWithWhereUniqueWithoutUserInput | UserAuthUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAuthUpdateManyWithWhereWithoutUserInput | UserAuthUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAuthScalarWhereInput | UserAuthScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserCreateNestedOneWithoutSlotsInput = {
    create?: XOR<UserCreateWithoutSlotsInput, UserUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlotsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<UserCreateWithoutSlotsInput, UserUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSlotsInput
    upsert?: UserUpsertWithoutSlotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSlotsInput, UserUpdateWithoutSlotsInput>, UserUncheckedUpdateWithoutSlotsInput>
  }

  export type UserCreateNestedOneWithoutInvitesSentInput = {
    create?: XOR<UserCreateWithoutInvitesSentInput, UserUncheckedCreateWithoutInvitesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitesReceivedInput = {
    create?: XOR<UserCreateWithoutInvitesReceivedInput, UserUncheckedCreateWithoutInvitesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvitesSentNestedInput = {
    create?: XOR<UserCreateWithoutInvitesSentInput, UserUncheckedCreateWithoutInvitesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesSentInput
    upsert?: UserUpsertWithoutInvitesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitesSentInput, UserUpdateWithoutInvitesSentInput>, UserUncheckedUpdateWithoutInvitesSentInput>
  }

  export type UserUpdateOneWithoutInvitesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutInvitesReceivedInput, UserUncheckedCreateWithoutInvitesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitesReceivedInput
    upsert?: UserUpsertWithoutInvitesReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitesReceivedInput, UserUpdateWithoutInvitesReceivedInput>, UserUncheckedUpdateWithoutInvitesReceivedInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutAuthMethodsInput = {
    create?: XOR<UserCreateWithoutAuthMethodsInput, UserUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthMethodsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type UserUpdateOneRequiredWithoutAuthMethodsNestedInput = {
    create?: XOR<UserCreateWithoutAuthMethodsInput, UserUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthMethodsInput
    upsert?: UserUpsertWithoutAuthMethodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthMethodsInput, UserUpdateWithoutAuthMethodsInput>, UserUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type ContactCreateWithoutUserInput = {
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
  }

  export type ContactUncheckedCreateWithoutUserInput = {
    id?: number
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
  }

  export type ContactCreateOrConnectWithoutUserInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateManyUserInputEnvelope = {
    data: ContactCreateManyUserInput | ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilitySlotCreateWithoutUserInput = {
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
  }

  export type AvailabilitySlotUncheckedCreateWithoutUserInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
  }

  export type AvailabilitySlotCreateOrConnectWithoutUserInput = {
    where: AvailabilitySlotWhereUniqueInput
    create: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput>
  }

  export type AvailabilitySlotCreateManyUserInputEnvelope = {
    data: AvailabilitySlotCreateManyUserInput | AvailabilitySlotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInviterInput = {
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
    invitee?: UserCreateNestedOneWithoutInvitesReceivedInput
  }

  export type InviteUncheckedCreateWithoutInviterInput = {
    id?: number
    inviteeId?: number | null
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type InviteCreateOrConnectWithoutInviterInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput>
  }

  export type InviteCreateManyInviterInputEnvelope = {
    data: InviteCreateManyInviterInput | InviteCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInviteeInput = {
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
    inviter: UserCreateNestedOneWithoutInvitesSentInput
  }

  export type InviteUncheckedCreateWithoutInviteeInput = {
    id?: number
    inviterId: number
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type InviteCreateOrConnectWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput>
  }

  export type InviteCreateManyInviteeInputEnvelope = {
    data: InviteCreateManyInviteeInput | InviteCreateManyInviteeInput[]
    skipDuplicates?: boolean
  }

  export type UserAuthCreateWithoutUserInput = {
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAuthUncheckedCreateWithoutUserInput = {
    id?: number
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserAuthCreateOrConnectWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type UserAuthCreateManyUserInputEnvelope = {
    data: UserAuthCreateManyUserInput | UserAuthCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
  }

  export type ContactUpdateManyWithWhereWithoutUserInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: IntFilter<"Contact"> | number
    userId?: IntFilter<"Contact"> | number
    contact_name?: StringFilter<"Contact"> | string
    contact_phone?: StringFilter<"Contact"> | string
    status?: EnumStatusFilter<"Contact"> | $Enums.Status
    invited_at?: DateTimeFilter<"Contact"> | Date | string
  }

  export type AvailabilitySlotUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilitySlotWhereUniqueInput
    update: XOR<AvailabilitySlotUpdateWithoutUserInput, AvailabilitySlotUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilitySlotCreateWithoutUserInput, AvailabilitySlotUncheckedCreateWithoutUserInput>
  }

  export type AvailabilitySlotUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilitySlotWhereUniqueInput
    data: XOR<AvailabilitySlotUpdateWithoutUserInput, AvailabilitySlotUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilitySlotUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilitySlotScalarWhereInput
    data: XOR<AvailabilitySlotUpdateManyMutationInput, AvailabilitySlotUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilitySlotScalarWhereInput = {
    AND?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    OR?: AvailabilitySlotScalarWhereInput[]
    NOT?: AvailabilitySlotScalarWhereInput | AvailabilitySlotScalarWhereInput[]
    id?: IntFilter<"AvailabilitySlot"> | number
    userId?: IntFilter<"AvailabilitySlot"> | number
    start_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    end_time?: DateTimeFilter<"AvailabilitySlot"> | Date | string
    is_free?: BoolFilter<"AvailabilitySlot"> | boolean
    label?: StringNullableFilter<"AvailabilitySlot"> | string | null
  }

  export type InviteUpsertWithWhereUniqueWithoutInviterInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInviterInput, InviteUncheckedUpdateWithoutInviterInput>
    create: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInviterInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInviterInput, InviteUncheckedUpdateWithoutInviterInput>
  }

  export type InviteUpdateManyWithWhereWithoutInviterInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInviterInput>
  }

  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    id?: IntFilter<"Invite"> | number
    inviterId?: IntFilter<"Invite"> | number
    inviteeId?: IntNullableFilter<"Invite"> | number | null
    invitee_phone?: StringFilter<"Invite"> | string
    send_at?: DateTimeFilter<"Invite"> | Date | string
    accepted_at?: DateTimeNullableFilter<"Invite"> | Date | string | null
  }

  export type InviteUpsertWithWhereUniqueWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInviteeInput, InviteUncheckedUpdateWithoutInviteeInput>
    create: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInviteeInput, InviteUncheckedUpdateWithoutInviteeInput>
  }

  export type InviteUpdateManyWithWhereWithoutInviteeInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInviteeInput>
  }

  export type UserAuthUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    update: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type UserAuthUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    data: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthUpdateManyWithWhereWithoutUserInput = {
    where: UserAuthScalarWhereInput
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAuthScalarWhereInput = {
    AND?: UserAuthScalarWhereInput | UserAuthScalarWhereInput[]
    OR?: UserAuthScalarWhereInput[]
    NOT?: UserAuthScalarWhereInput | UserAuthScalarWhereInput[]
    id?: IntFilter<"UserAuth"> | number
    userId?: IntFilter<"UserAuth"> | number
    provider?: EnumAuthProviderFilter<"UserAuth"> | $Enums.AuthProvider
    providerId?: StringFilter<"UserAuth"> | string
    accessToken?: StringNullableFilter<"UserAuth"> | string | null
    refreshToken?: StringNullableFilter<"UserAuth"> | string | null
    created_at?: DateTimeFilter<"UserAuth"> | Date | string
    updated_at?: DateTimeFilter<"UserAuth"> | Date | string
  }

  export type UserCreateWithoutContactsInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    slots?: AvailabilitySlotCreateNestedManyWithoutUserInput
    invitesSent?: InviteCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput
    invitesSent?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSlotsInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactCreateNestedManyWithoutUserInput
    invitesSent?: InviteCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSlotsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    invitesSent?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSlotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSlotsInput, UserUncheckedCreateWithoutSlotsInput>
  }

  export type UserUpsertWithoutSlotsInput = {
    update: XOR<UserUpdateWithoutSlotsInput, UserUncheckedUpdateWithoutSlotsInput>
    create: XOR<UserCreateWithoutSlotsInput, UserUncheckedCreateWithoutSlotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSlotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSlotsInput, UserUncheckedUpdateWithoutSlotsInput>
  }

  export type UserUpdateWithoutSlotsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInvitesSentInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotCreateNestedManyWithoutUserInput
    invitesReceived?: InviteCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitesSentInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput
    invitesReceived?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    authMethods?: UserAuthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitesSentInput, UserUncheckedCreateWithoutInvitesSentInput>
  }

  export type UserCreateWithoutInvitesReceivedInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotCreateNestedManyWithoutUserInput
    invitesSent?: InviteCreateNestedManyWithoutInviterInput
    authMethods?: UserAuthCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitesReceivedInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput
    invitesSent?: InviteUncheckedCreateNestedManyWithoutInviterInput
    authMethods?: UserAuthUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitesReceivedInput, UserUncheckedCreateWithoutInvitesReceivedInput>
  }

  export type UserUpsertWithoutInvitesSentInput = {
    update: XOR<UserUpdateWithoutInvitesSentInput, UserUncheckedUpdateWithoutInvitesSentInput>
    create: XOR<UserCreateWithoutInvitesSentInput, UserUncheckedCreateWithoutInvitesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitesSentInput, UserUncheckedUpdateWithoutInvitesSentInput>
  }

  export type UserUpdateWithoutInvitesSentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutUserNestedInput
    invitesReceived?: InviteUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitesSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput
    invitesReceived?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    authMethods?: UserAuthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInvitesReceivedInput = {
    update: XOR<UserUpdateWithoutInvitesReceivedInput, UserUncheckedUpdateWithoutInvitesReceivedInput>
    create: XOR<UserCreateWithoutInvitesReceivedInput, UserUncheckedCreateWithoutInvitesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitesReceivedInput, UserUncheckedUpdateWithoutInvitesReceivedInput>
  }

  export type UserUpdateWithoutInvitesReceivedInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUpdateManyWithoutInviterNestedInput
    authMethods?: UserAuthUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitesReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    authMethods?: UserAuthUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthMethodsInput = {
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotCreateNestedManyWithoutUserInput
    invitesSent?: InviteCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteCreateNestedManyWithoutInviteeInput
  }

  export type UserUncheckedCreateWithoutAuthMethodsInput = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender?: $Enums.Gender | null
    phone: string
    date_of_birth?: Date | string | null
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutUserInput
    slots?: AvailabilitySlotUncheckedCreateNestedManyWithoutUserInput
    invitesSent?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitesReceived?: InviteUncheckedCreateNestedManyWithoutInviteeInput
  }

  export type UserCreateOrConnectWithoutAuthMethodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthMethodsInput, UserUncheckedCreateWithoutAuthMethodsInput>
  }

  export type UserUpsertWithoutAuthMethodsInput = {
    update: XOR<UserUpdateWithoutAuthMethodsInput, UserUncheckedUpdateWithoutAuthMethodsInput>
    create: XOR<UserCreateWithoutAuthMethodsInput, UserUncheckedCreateWithoutAuthMethodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthMethodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthMethodsInput, UserUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type UserUpdateWithoutAuthMethodsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUpdateManyWithoutInviteeNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthMethodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    phone?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutUserNestedInput
    slots?: AvailabilitySlotUncheckedUpdateManyWithoutUserNestedInput
    invitesSent?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitesReceived?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
  }

  export type ContactCreateManyUserInput = {
    id?: number
    contact_name: string
    contact_phone: string
    status: $Enums.Status
    invited_at?: Date | string
  }

  export type AvailabilitySlotCreateManyUserInput = {
    id?: number
    start_time: Date | string
    end_time: Date | string
    is_free: boolean
    label?: string | null
  }

  export type InviteCreateManyInviterInput = {
    id?: number
    inviteeId?: number | null
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type InviteCreateManyInviteeInput = {
    id?: number
    inviterId: number
    invitee_phone: string
    send_at?: Date | string
    accepted_at?: Date | string | null
  }

  export type UserAuthCreateManyUserInput = {
    id?: number
    provider: $Enums.AuthProvider
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContactUpdateWithoutUserInput = {
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    contact_name?: StringFieldUpdateOperationsInput | string
    contact_phone?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    invited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilitySlotUpdateWithoutUserInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilitySlotUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilitySlotUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    is_free?: BoolFieldUpdateOperationsInput | boolean
    label?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InviteUpdateWithoutInviterInput = {
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitee?: UserUpdateOneWithoutInvitesReceivedNestedInput
  }

  export type InviteUncheckedUpdateWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteeId?: NullableIntFieldUpdateOperationsInput | number | null
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUncheckedUpdateManyWithoutInviterInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteeId?: NullableIntFieldUpdateOperationsInput | number | null
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUpdateWithoutInviteeInput = {
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inviter?: UserUpdateOneRequiredWithoutInvitesSentNestedInput
  }

  export type InviteUncheckedUpdateWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUncheckedUpdateManyWithoutInviteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviterId?: IntFieldUpdateOperationsInput | number
    invitee_phone?: StringFieldUpdateOperationsInput | string
    send_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAuthUpdateWithoutUserInput = {
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAuthUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
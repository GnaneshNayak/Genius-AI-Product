import prismadb from '@/lib/prismadb';
import { stripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';
import { auth, currentUser } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

const settingUrl = absoluteUrl('/settings');

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!user || !userId)
      return new NextResponse('Unauthorized', { status: 401 });

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
    });
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingUrl,
      cancel_url: settingUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      billing_address_collection: 'auto',
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: 'inr',

            product_data: {
              name: 'Genius Pro',
              description: 'Unlimited AI Generations',
            },
            unit_amount: 20000,

            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });
    console.log(JSON.stringify({ url: stripeSession.url }));

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

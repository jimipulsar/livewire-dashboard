<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CustomResetPasswordNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject("Reimposta password")
            ->line("Hai ricevuto questa email perché abbiamo ricevuto una richiesta di reimpostazione della password per il tuo account.")
            ->action('Resetta Password', url(app()->getLocale() . '/password/reset', $this->token))
            ->line('Questo link per la reimpostazione della password scadrà tra 60 minuti.')
            ->line('Se non hai richiesto la reimpostazione della password, non sono necessarie ulteriori azioni.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
